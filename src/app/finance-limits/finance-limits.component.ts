import {Component, Inject, OnInit} from '@angular/core';
import {Version} from '../models/version';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {FinanceLimit} from '../models/financeLimit';


interface IVersionLimits {
  versionCode: string;
  year: string;
  financeLimits: string;
}

@Component({
  selector: 'app-finance-limits',
  templateUrl: './finance-limits.component.html',
  styleUrls: ['./finance-limits.component.scss']
})
export class FinanceLimitsComponent implements OnInit {

  public versions: Version[];
  public versionLimits: IVersionLimits[];
  public isLoaded = false;
  constructor( public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {}

  public async ngOnInit() {
    await this.getFinanceLimitsByYear();
  }

  public async getFinanceLimitsByYear() {
    await this.http.get<IVersionLimits[]>(environment.apiUrl + '/finance/getFinanceLimitsByYear')
      .subscribe( response => {
        console.log(response);
        this.versionLimits = response;

        this.isLoaded = true;
      });
  }

}
