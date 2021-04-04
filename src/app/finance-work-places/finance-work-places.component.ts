import {Component, Inject, OnInit} from '@angular/core';
import {Version} from '../models/version';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TargetIndicator} from '../models/targetIndicator';

@Component({
  selector: 'app-finance-work-places',
  templateUrl: './finance-work-places.component.html',
  styleUrls: ['./finance-work-places.component.scss']
})
export class FinanceWorkPlacesComponent implements OnInit {
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

  public async getFinanceWorkPlaces() {
    await this.http.get<any[]>(environment.apiUrl + '/finance/getFinanceWorkPlaces/' + this.current_version.rid)
      .subscribe( response => {
        this.current_version.financeWorkPlaces = response;
      });
  }

  public async changeCurrentVersion(version: Version) {
    this.isLoaded = false;
    this.current_version = version;
    this.getFinanceWorkPlaces();
    this.isLoaded = true;
  }


}
