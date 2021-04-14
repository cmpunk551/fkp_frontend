import {Component, Inject, OnInit} from '@angular/core';
import {FinanceWorkplace} from '../models/financeWorkplace';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pithy-analysis-finances',
  templateUrl: './pithy-analysis-finances.component.html',
  styleUrls: ['./pithy-analysis-finances.component.scss']
})
export class PithyAnalysisFinancesComponent implements OnInit {
  public dataSource: any;
  public isLoaded = false;
  constructor( public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {}

  public async ngOnInit() {
    await this.getFinanceWorkPlaces();
  }

  public async getFinanceWorkPlaces() {
    await this.http.get<any[]>(environment.apiUrl + '/finance/getFinanceWorkPlaces')
      .subscribe( response => {
        this.dataSource = {
          fields: [
            {
              caption: 'Версия',
              dataField: 'versionCode',
              area: 'row',
            },
            {
              caption: 'Раздел',
              dataField: 'chapter',
              area: 'row',
            },
            {
              caption: 'Подраздел',
              dataField: 'subchapter',
              area: 'row'
            },
            {
              caption: 'Мероприятие',
              dataField: 'shortName',
              area: 'row'
            },
            {
              caption: 'Вид финансирования',
              dataField: 'typeFinancing',
              area: 'column'
            },
            {
              caption: 'Год',
              dataField: 'year',
              area: 'column'
            },
            {
              caption: 'Значение финансового показателя',
              dataField: 'finance',
              dataType: 'number',
              summaryType: 'sum',
              area: 'data'
            }],
          store: response
        };
        this.isLoaded = true;
      });
  }

}
