import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UatPackagerComponent } from './uat-packager/uat-packager.component';
import {RouterModule, Routes} from '@angular/router';
import { SitDeploymentComponent } from './sit-deployment/sit-deployment.component';
import {ToastModule} from 'primeng/toast';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


export const routes: Routes = [
  {path: 'uatpackager', component: UatPackagerComponent},
  {path: 'sitdeployment', component: SitDeploymentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UatPackagerComponent,
    SitDeploymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
