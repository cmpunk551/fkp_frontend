import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';

interface IProject {
  code: string;
  name: string;
  cost: string;
  priority: string;
  systemName: string;
  type: string;
  mastered: string;
  remains: string;
}

interface IVersion {
  rid: string;
  code: string;
  name: string;
  projectProjects: IProject[];
  laborCost: string;
  priority: string;
  description: string;
  generalInfo: IGeneralInfo;
  goals: IGoal[];
  work_events: IWorkEvents[];
}

interface IGeneralInfo {
  totalFinanceLimit: string;
  totalProjects: string;
  totalWorks: string;
  totalLaunches: string;
  totalCompletedLaunches: string;
}

interface IGoal {
  id: string;
  version_id: string;
  name: string;
  type: string;
}
interface IWorkEvents {
  rid: string;
  name: string;
  sectionIdCode: string;
  dateFrom: string;
  dateTo: string;
  projectIdCode: string;
  isDoneValue: string;
}

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  public versions: IVersion[];
  public current_version: IVersion;
  public toggleFlag = false;
  public isLoaded = false;

  constructor( public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
    this.getVersions();
  }

  public ngOnInit(): void {

  }
  public async getVersions() {
    console.log(environment.apiUrl + '/versions');
    await this.http.get<IVersion[]>( environment.apiUrl + '/versions').subscribe(response => {
      this.versions = response;
      this.current_version = this.versions[0];
      this.getGoals();
      this.getGeneralInfo();
      this.getProjects();
      this.getWorkEvents();
      console.log(this.current_version);
    });
  }

  public async getGeneralInfo() {
    await this.http.get<IGeneralInfo>( environment.apiUrl + '/versions/getGeneralInfo/' + this.current_version.rid).subscribe(response => {
      this.current_version.generalInfo = response;
    });
  }

  public async getGoals() {
    await this.http.get<IGoal[]>(environment.apiUrl + '/versions/getGoals/' + this.current_version.rid).subscribe(response => {
      this.current_version.goals = response;
    });
  }
  public async getProjects() {
    await this.http.get<IProject[]>(environment.apiUrl + '/Projects/' + this.current_version.rid).subscribe(response => {
      this.current_version.projectProjects = response;
    });
  }
  public async getWorkEvents() {
    await this.http.get<IWorkEvents[]>(environment.apiUrl + '/WorkEvents/getWorks/' + this.current_version.rid).subscribe(response => {
      this.current_version.work_events  = response;
      this.isLoaded = true;
    });
  }

  public showSelector() {
    this.toggleFlag = !this.toggleFlag;
  }

  public changeCurrentVersion() {
    this.isLoaded = false;
    this.getGeneralInfo();
    this.getGoals();
    this.getProjects();
    this.getWorkEvents();

  }

}
