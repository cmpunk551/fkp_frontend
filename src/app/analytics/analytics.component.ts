import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GoalObjective} from '../models/goalObjective';
import {environment} from '../../environments/environment';

interface IGoal {
  versionCode: string;
  totalObjectives: string;
}

interface IWorkEvent {
  versionCode: string;
  totalWorks: string;
  totalCompletedWorks: string;
  totalNotStartedWorks: string;
}
interface IFinanceInfo {
  versionCode: string;
  totalFinance: string;
  totalFinanceBud: string;
  totalFinanceNuBud: string;
  totalFinanceLimit: string;
}

interface ILimit {
  versionCode: string;
  y2016: string;
  y2017: string;
  y2018: string;
  y2019: string;
  y2020: string;
  y2021: string;
  y2022: string;
  y2023: string;
  y2024: string;
  y2025: string;
}

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  public isLoaded = false;
  public goals: IGoal[];
  public workEvents: IWorkEvent[];
  public finances: IFinanceInfo[];
  public limits: ILimit[];
  constructor( public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {}

  public async ngOnInit() {
    await this.getData();
    this.isLoaded = true;
  }

  public async getGoalsObjectives() {
    await this.http.get<IGoal[]>(environment.apiUrl + '/versions/getTotalGoalsAndObjectives' )
      .subscribe(response => {
        this.goals = response;
      });
  }
  public async getWorksGeneralInfo() {
    await this.http.get<IWorkEvent[]>(environment.apiUrl + '/workEvents/getWorksGeneralInfo' )
      .subscribe(response => {
        this.workEvents = response;
      });
  }
  public async getFinanceGeneralInfo() {
    await this.http.get<IFinanceInfo[]>(environment.apiUrl + '/finance/getFinanceGeneralInfo' )
      .subscribe(response => {
        this.finances = response;
      });
  }
  public async getFinanceLimitsByYear() {
    await this.http.get<ILimit[]>(environment.apiUrl + '/finance/getFinanceLimitsByYear' )
      .subscribe(response => {
        this.limits = response;
      });
  }
  public async getData() {
    this.getGoalsObjectives();
    this.getWorksGeneralInfo();
    this.getFinanceGeneralInfo();
    this.getFinanceLimitsByYear();
  }
}
