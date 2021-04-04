import {Component, Inject, OnInit} from '@angular/core';
import {Version} from '../models/version';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Spacecraft} from '../models/spacecraft';
import {TargetIndicator} from '../models/targetIndicator';

@Component({
  selector: 'app-target-indicators',
  templateUrl: './target-indicators.component.html',
  styleUrls: ['./target-indicators.component.scss']
})
export class TargetIndicatorsComponent implements OnInit {

  public versions: Version[];
  public current_version: Version;
  public isLoaded = false;
  constructor( public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {}

  public async ngOnInit() {
    await this.getVersions();
  }

  public async getVersions() {
    await this.http.get<Version[]>( environment.apiUrl + '/versions').subscribe(response => {
      this.versions = response;
      this.isLoaded = true;
    });
  }

  public async getTargetIndicators() {
    await this.http.get<TargetIndicator[]>(environment.apiUrl + '/targetIndicators/' + this.current_version.rid)
      .subscribe( response => {
        this.current_version.targetIndicators = response;
      });
  }

  public async changeCurrentVersion(version: Version) {
    this.isLoaded = false;
    this.current_version = version;
    this.getTargetIndicators();
    this.isLoaded = true;
  }

}
