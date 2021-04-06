import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Version} from '../models/version';
import {environment} from '../../environments/environment';

interface ISection {
  sectionId: string;
  sectionIdCode: string;
}

interface IWork {
  rid: string;
  name: string;
  dateFrom: string;
  dateTo: string;
  isDoneValue;
}

interface IResult {
  name: string;
  dateFrom: string;
  dateTo: string;
  eventTypeIdCode: string;
}

@Component({
  selector: 'app-work-events',
  templateUrl: './work-events.component.html',
  styleUrls: ['./work-events.component.scss']
})
export class WorkEventsComponent implements OnInit {
  public toggleFlag = false;
  public isLoaded = false;
  public isResultsLoaded = false;
  public versions: Version[];
  public sections: ISection[];
  public works: IWork[];
  public results: IResult[];
  public currentVersion: Version;
  public currentSection: ISection;

  constructor( public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
  }

  public async ngOnInit() {
    this.getVersions();
  }

  public async getVersions() {
    await this.http.get<Version[]>( environment.apiUrl + '/versions').subscribe(response => {
      this.versions = response;
      this.isLoaded = true;
    });
  }

  public async getSections() {
    await this.http.get<ISection[]>
    ( environment.apiUrl + '/workEvents/getSections/' + this.currentVersion.rid )
      .subscribe(response => {
      this.sections = response;
      this.currentSection = this.sections[0];
        this.getWorks();
      });
  }

  public async getWorks() {
    await this.http.get<IWork[]>
    ( environment.apiUrl + '/workEvents/getWorks/' + this.currentVersion.rid + '/' + this.currentSection.sectionId)
      .subscribe(response => {
      this.works = response;
      this.currentSection = this.sections[0];
    });
  }

  public getResults(rid: string) {
    this.http.get<IResult[]>
    ( environment.apiUrl + '/workEvents/getWorkResults/' + this.currentVersion.rid + '/' + rid )
      .subscribe(response => {
        this.results = response;
        this.isResultsLoaded = true;
        return true;
      });
  }

  public showSelector() {
    this.toggleFlag = !this.toggleFlag;
  }
  public async changeCurrentSection() {
    this.getWorks();
    this.showSelector();
  }
  public async changeCurrentVersion(version: Version) {
    this.isLoaded = false;
    this.currentVersion = version;
    this.getSections();
    this.isLoaded = true;
  }

}
