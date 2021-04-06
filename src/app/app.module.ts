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
import {DxChartModule, DxDataGridModule, DxPivotGridModule, DxSliderModule, DxTreeListModule} from 'devextreme-angular';
import {VersionSelectorComponent} from './version-selector/version-selector.component';
import {SpacecraftsComponent} from './spacecrafts/spacecrafts.component';
import {TargetIndicatorsComponent} from './target-indicators/target-indicators.component';
import {FinanceWorkPlacesComponent} from './finance-work-places/finance-work-places.component';
import {FinanceLimitsComponent} from './finance-limits/finance-limits.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {StructureAnalysisComponent} from './structure-analysis/structure-analysis.component';
import {PithyAnalysisComponent} from './pithy-analysis/pithy-analysis.component';
import {WorkInProgressComponent} from './work-in-progress/work-in-progress.component';
import {WorkEventsComponent} from './work-events/work-events.component';

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
    AnalyticsComponent,
    PithyAnalysisComponent,
    WorkInProgressComponent,
    WorkEventsComponent,
    StructureAnalysisComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    DxDataGridModule,
    DxChartModule,
    DxPivotGridModule,
    DxSliderModule,
    DxTreeListModule,
    InlineSVGModule.forRoot(),
    ClickOutsideModule,
    NgSelectModule,
    RouterModule.forRoot([
      {path: '', component: VersionComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'analysis', component: DocumentAnalysisComponent},
      {path: 'analytics', component: AnalyticsComponent},
      {path: 'analytics/structure', component: StructureAnalysisComponent},
      {path: 'analytics/pithy', component: PithyAnalysisComponent},
      {path: 'work', component: WorkInProgressComponent},
      {path: 'work-events', component: WorkEventsComponent},
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
