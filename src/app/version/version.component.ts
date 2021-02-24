import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  public versions: IProjectVersion[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.getProjects(http, baseUrl);
  }

  public ngOnInit(): void {

  }

  public async getProjects(http: HttpClient, baseUrl: string) {
    await http.get<IProjectVersion[]>(baseUrl + 'version').subscribe(response => {
      this.versions = response;
      console.log(this.versions);
    });
  }

}

interface IProject {
  code: string;
  name: string;
  description: string;
  laborCost: string;
}

interface IProjectVersion {
  code: string;
  name: string;
  projectProjects: IProject[];
  laborCost: string;
  priority: string;
}
