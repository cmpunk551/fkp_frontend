import {HttpClient} from '@angular/common/http';
import {Component, Inject, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {GeneralInfo} from '../models/generalInfo';
import {Project} from '../models/project';
import {GoalObjective} from '../models/goalObjective';
import {WorkEvent} from '../models/workEvent';
import {Version} from '../models/version';
import {FinanceLimit} from '../models/financeLimit';
import {Finance} from '../models/finance';
import {FinanceWorkplace} from '../models/financeWorkplace';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  public versions: Version[];
  public current_version: Version;
  public finance_data_source: any;
  public isLoaded = false;
  public isInfoLoaded = false;

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
      this.isInfoLoaded = true;
    });
  }

  public async getGoalsObjectives() {
    await this.http.get<GoalObjective[]>(environment.apiUrl + '/versions/getGoalsAndObjectives/' + this.current_version.rid)
      .subscribe(response => {
      this.current_version.goalsObjectives = response;
    });
  }
  public async getProjects() {
    await this.http.get<Project[]>(environment.apiUrl + '/Projects/' + this.current_version.rid).subscribe(response => {
      this.current_version.projectProjects = response;
    });
  }
  public async getFinanceLimitsByYear() {
    await this.http.get<FinanceLimit[]>(environment.apiUrl + '/finance/getFinanceLimitsByYear/' + this.current_version.rid)
      .subscribe( response => {
        this.current_version.financeLimits = response;
      });
  }

  public async getFinancesByYear() {
    await this.http.get<Finance[]>(environment.apiUrl + '/finance/getFinancesByYear/' + this.current_version.rid)
      .subscribe( response => {
        this.current_version.finances = response;
      });
  }
  public async getFinanceWorkPlaces() {
    await this.http.get<FinanceWorkplace[]>(environment.apiUrl + '/finance/getFinanceWorkPlaces/' + this.current_version.rid)
      .subscribe( response => {
        this.current_version.financeWorkPlaces = response;
        this.finance_data_source = {
          fields: [{
            caption: 'Наименование мероприятия ',
            dataField: 'наименованиеМероприятия',
            area: 'row',
          },
          {
            caption: 'Вид финансирования',
            dataField: 'видФинансирования',
            area: 'row'
          },
          {
            dataField: 'показательФинансированияПоГодам',
            area: 'column'
          }, {
            caption: 'Sales',
            dataField: 'значениеФинансовогоПоказателя',
            dataType: 'number',
            summaryType: 'sum',
            area: 'data'
          }],
          store: this.current_version.financeWorkPlaces
        };
      });
  }
  public async changeCurrentVersion(version: Version) {
    this.isLoaded = false;
    this.isInfoLoaded = false;
    this.current_version = version;
    this.getGeneralInfo();
    this.getFinanceLimitsByYear();
    this.getFinancesByYear();
    this.getFinanceWorkPlaces();
    this.getGoalsObjectives();
    this.getProjects();
    this.isLoaded = true;
  }

}
