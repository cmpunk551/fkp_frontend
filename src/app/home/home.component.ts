import { Component } from '@angular/core';
import {DashboardControlArgs} from 'devexpress-dashboard';
import {TextBoxItemEditorExtension} from 'devexpress-dashboard/designer/text-box-item-editor-extension';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  workingMode = 'Viewer';
  dashboardId = 'dashboard2';
  dashboards = [
    {'id': 'dashboard1', 'name': 'dashboard1'},
    {'id': 'dashboard2', 'name': 'dashboard2'},
    {'id': 'dashboard3', 'name': 'dashboard3'},
  ];
  get workingModeText() {
    return 'Сменить на ' + this.toggleMode(this.workingMode);
  }
  changeWorkingMode() {
    this.workingMode = this.toggleMode(this.workingMode);
  }
  toggleMode(mode) {
    return mode === 'Viewer' ? 'Designer' : 'Viewer';
  }
  onBeforeRender(args: DashboardControlArgs) {
    const dashboardControl = args.component;

    dashboardControl.registerExtension(new TextBoxItemEditorExtension(dashboardControl));
  }

  public getApi(): string {
    return environment.dashboardUrl + '/api/dashboard';
  }

}
