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
import {DxDataGridModule} from 'devextreme-angular';

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
    FetchDataComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    DxDataGridModule,
    InlineSVGModule.forRoot(),
    ClickOutsideModule,
    NgSelectModule,
    RouterModule.forRoot([
      {path: '', component: VersionComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'analysis', component: DocumentAnalysisComponent},
      {path: 'admin', component: AdminPanelComponent,  canActivate: [AuthGuard]},
      {path: 'versions', component: VersionComponent},
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
