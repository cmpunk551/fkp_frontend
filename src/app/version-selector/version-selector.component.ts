import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Version} from '../models/version';

@Component({
  selector: 'app-version-selector',
  templateUrl: './version-selector.component.html',
  styleUrls: ['./version-selector.component.scss']
})
export class VersionSelectorComponent implements OnInit {

  public current_version: Version;
  public toggleFlag = false;

  @Input() public versions: Version[];
  @Output() public versionSelected: EventEmitter<Version> = new EventEmitter();


  constructor( public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {}

  public async ngOnInit() {
    this.changeCurrentVersion(this.versions[0]);
  }

  public showSelector() {
    this.toggleFlag = !this.toggleFlag;
  }

  public changeCurrentVersion(version: Version) {
    this.versionSelected.emit(version);
    this.current_version = version;
  }


}
