import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Version} from '../models/version';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TargetIndicator} from '../models/targetIndicator';
import {FinanceWorkplace} from '../models/financeWorkplace';

@Component({
  selector: 'app-finance-work-places',
  templateUrl: './finance-work-places.component.html',
  styleUrls: ['./finance-work-places.component.scss']
})
export class FinanceWorkPlacesComponent implements OnInit {

  @ViewChild('pivotCard') public cardBody: HTMLDivElement;

  public versions: Version[];
  public current_version: Version;
  public dataSource: any;
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

  public async getFinanceWorkPlaces() {
    await this.http.get<FinanceWorkplace[]>(environment.apiUrl + '/finance/getFinanceWorkPlaces/' + this.current_version.rid)
      .subscribe( response => {
        this.current_version.financeWorkPlaces = response;
        this.dataSource = {
          fields: [
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
            store: this.current_version.financeWorkPlaces
        };

      });
  }

  public async changeCurrentVersion(version: Version) {
    this.isLoaded = false;
    this.current_version = version;
    this.getFinanceWorkPlaces();
    this.isLoaded = true;
  }


}
