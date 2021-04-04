import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { VersionComponent } from './version/version.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './helpers/auth.guard';
import {InlineSVGModule} from 'ng-inline-svg';
import {ClickOutsideModule} from 'ng-click-outside';
import {DocumentAnalysisComponent} from './document-analysis/document-analysis.component';
import {UploadComponent} from './upload/upload.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interspector';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {DxChartModule, DxDataGridModule} from 'devextreme-angular';
import {VersionSelectorComponent} from './version-selector/version-selector.component';
import {SpacecraftsComponent} from './spacecrafts/spacecrafts.component';
import {TargetIndicatorsComponent} from './target-indicators/target-indicators.component';
import {FinanceWorkPlacesComponent} from './finance-work-places/finance-work-places.component';
import {FinanceLimitsComponent} from './finance-limits/finance-limits.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    VersionComponent,
    LoginComponent,
    CounterComponent,
    DocumentAnalysisComponent,
    UploadComponent,
    VersionSelectorComponent,
    SpacecraftsComponent,
    TargetIndicatorsComponent,
    FinanceWorkPlacesComponent,
    FinanceLimitsComponent,
    FetchDataComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    DxDataGridModule,
    DxChartModule,
    InlineSVGModule.forRoot(),
    ClickOutsideModule,
    NgSelectModule,
    RouterModule.forRoot([
      {path: '', component: VersionComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'analysis', component: DocumentAnalysisComponent},
      {path: 'admin', component: AdminPanelComponent,  canActivate: [AuthGuard]},
      {path: 'versions', component: VersionComponent},
      {path: 'spacecrafts', component: SpacecraftsComponent},
      {path: 'targetIndicators', component: TargetIndicatorsComponent},
      {path: 'financeWorkPlaces', component: FinanceWorkPlacesComponent},
      {path: 'financeLimits', component: FinanceLimitsComponent},
      {path: 'login', component: LoginComponent},
      {path: 'counter', component: CounterComponent},
      {path: 'fetch-data', component: FetchDataComponent},
    ]),
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
