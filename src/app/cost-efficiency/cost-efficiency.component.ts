import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

interface IEffect {
  versionIdCode: string;
  name: string;
  sum1: string;
  sum2: string;
  sum3: string;
  sum4: string;
  sum5: string;
  sum6: string;
  sum7: string;
  sum8: string;
  sum9: string;
  sum10: string;
  summ: string;
}


@Component({
  selector: 'app-cost-efficiency',
  templateUrl: './cost-efficiency.component.html',
  styleUrls: ['./cost-efficiency.component.scss']
})
export class CostEfficiencyComponent implements OnInit {
  public isLoaded = false;
  public economicEffects: IEffect[];

  constructor( public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {}

  public async ngOnInit() {
    this.getEconomicEffects();
  }

  public async getEconomicEffects() {
    await this.http.get<IEffect[]>(environment.apiUrl + '/economicEffects' )
      .subscribe(response => {
        this.economicEffects = response;
        this.isLoaded = true;
      });
  }

}
