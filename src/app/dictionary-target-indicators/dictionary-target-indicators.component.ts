import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Project} from '../models/project';


interface IIndicator {
  id: string;
  parentId: string;
  versionCode: string;
  code: string;
  name: string;
}

@Component({
  selector: 'app-dictionary-target-indicators',
  templateUrl: './dictionary-target-indicators.component.html',
  styleUrls: ['./dictionary-target-indicators.component.scss']
})
export class DictionaryTargetIndicatorsComponent implements OnInit {

  public indicators: IIndicator[];
  public isLoaded = false;
  public isIndicatorSelected = false;
  public projects: Project[];
  constructor( public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {}

  public async ngOnInit() {
    await this.getTargetIndicators();
  }

  public async getTargetIndicators() {
    await this.http.get<IIndicator[]>(environment.apiUrl + '/targetIndicators/getDictionaryTargetIndicators').subscribe((response) => {
      this.indicators = response;
      this.isLoaded = true;
    });
  }
  public async getProjects(id: string) {
    await this.http.get<Project[]>(environment.apiUrl + '/projects/getProjectsByTargetIndicator/' + id)
      .subscribe((response) => {
        this.projects = response;
        this.isIndicatorSelected = true;
    });
    }

  public async selectIndicator(event) {
    if (event.currentSelectedRowKeys.length) {
      await this.getProjects(event.currentSelectedRowKeys[0]);
    } else {
      this.isIndicatorSelected = false;
    }
  }

}
