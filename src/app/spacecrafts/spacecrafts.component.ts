import {Component, Inject, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Version} from '../models/version';
import {Spacecraft} from '../models/spacecraft';

@Component({
  selector: 'app-spacecrafts',
  templateUrl: './spacecrafts.component.html',
  styleUrls: ['./spacecrafts.component.scss']
})
export class SpacecraftsComponent implements OnInit {

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

  public async getSpacecrafts() {
    await this.http.get<Spacecraft[]>(environment.apiUrl + '/spacecrafts/spacecraftSchedule/' + this.current_version.rid)
      .subscribe( response => {
      this.current_version.spacecrafts = response;
    });
  }

  public async changeCurrentVersion(version: Version) {
    this.isLoaded = false;
    this.current_version = version;
    this.getSpacecrafts();
    this.isLoaded = true;
  }

}
