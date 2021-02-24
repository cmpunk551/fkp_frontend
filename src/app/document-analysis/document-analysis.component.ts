import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-document-analysis',
  templateUrl: './document-analysis.component.html',
  styleUrls: ['./document-analysis.component.scss']
})
export class DocumentAnalysisComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  public onCreate() {

    //   this.http.post('https://localhost:5001/api/users', this.user)
    //     .subscribe(res => {
    //     });
    // }

  }
}
