import {HttpClient} from '@angular/common/http';
import {Component, Inject, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {GeneralInfo} from '../models/generalInfo';
import {Project} from '../models/project';
import {Goal} from '../models/goal';
import {WorkEvent} from '../models/workEvent';
import {Version} from '../models/version';
import {FinanceLimit} from '../models/financeLimit';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  public versions: Version[];
  public current_version: Version;
  public toggleFlag = false;
  public isLoaded = false;

  constructor( public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
  }

  public async ngOnInit() {
   await this.getVersions();
  }


  public async getVersions() {
    await this.http.get<Version[]>( environment.apiUrl + '/versions').subscribe(response => {
      this.versions = response;
      this.isLoaded = true;
    });
  }

  public async getGeneralInfo() {
    await this.http.get<GeneralInfo>( environment.apiUrl + '/versions/getGeneralInfo/' + this.current_version.rid).subscribe(response => {
      this.current_version.generalInfo = response;
    });
  }

  public async getGoals() {
    await this.http.get<Goal[]>(environment.apiUrl + '/versions/getGoals/' + this.current_version.rid).subscribe(response => {
      this.current_version.goals = response;
      console.log(response);
    });
  }
  public async getProjects() {
    await this.http.get<Project[]>(environment.apiUrl + '/Projects/' + this.current_version.rid).subscribe(response => {
      this.current_version.projectProjects = response;
    });
  }
  public async getWorkEvents() {
    await this.http.get<WorkEvent[]>(environment.apiUrl + '/WorkEvent/getWorks/' + this.current_version.rid).subscribe(response => {
      this.current_version.work_events  = response;
      this.isLoaded = true;
    });
  }
  public async getFinanceLimitsByYear() {
    await this.http.get<FinanceLimit[]>(environment.apiUrl + '/finance/getFinanceLimitsByYear/' + this.current_version.rid)
      .subscribe( response => {
        this.current_version.financeLimits = response;
      });
  }

  public async changeCurrentVersion(version: Version) {
    this.isLoaded = false;
    this.current_version = version;
    this.getGeneralInfo();
    this.getFinanceLimitsByYear();
    this.getGoals();
    this.getProjects();
    this.getWorkEvents();
    this.isLoaded = true;
  }

}
