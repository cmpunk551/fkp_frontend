import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

interface IStructure {
  id: string;
  parentId: string;
  name: string;
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
  selector: 'app-structure-efficiency',
  templateUrl: './structure-efficiency.component.html',
  styleUrls: ['./structure-efficiency.component.scss']
})
export class StructureEfficiencyComponent implements OnInit {

  public isLoaded = false;
  public structures: IStructure[];

  constructor( public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {}

  public async ngOnInit() {
    this.getStructures();
  }

  public async getStructures() {
    await this.http.get<IStructure[]>(environment.apiUrl + '/versions/getStructureEfficiency' )
      .subscribe(response => {
        this.structures = response;
        this.isLoaded = true;
      });
  }
}
