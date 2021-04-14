import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

interface IDuration {
  versionIdCode: string;
  shortName: string;
  duration: string;
  yearFrom: string;
  yearTo: string;
}

@Component({
  selector: 'app-duration-efficiency',
  templateUrl: './duration-efficiency.component.html',
  styleUrls: ['./duration-efficiency.component.scss']
})
export class DurationEfficiencyComponent implements OnInit {
  public isLoaded = false;
  public durations: IDuration[];

  constructor( public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {}

  public async ngOnInit() {
    this.getDurations();
  }

  public async getDurations() {
    await this.http.get<IDuration[]>(environment.apiUrl + '/versions/getDurationByOkr' )
      .subscribe(response => {
        this.durations = response;
        this.isLoaded = true;
      });
  }
}
