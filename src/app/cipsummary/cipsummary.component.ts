import {Component, Inject, OnInit} from '@angular/core';
import {TargetIndicator} from '../models/targetIndicator';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-cipsummary',
  templateUrl: './cipsummary.component.html',
  styleUrls: ['./cipsummary.component.scss']
})
export class CIPSummaryComponent implements OnInit {

  public targetIndicators: TargetIndicator[];
  public isLoaded = false;
  constructor( public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {}

  public async ngOnInit() {
    await this.getTargetIndicators();
  }

  public async getTargetIndicators() {
    await this.http.get<TargetIndicator[]>(environment.apiUrl + '/targetIndicators')
      .subscribe( response => {
        this.targetIndicators = response;
        this.isLoaded = true;
      });
  }
}
