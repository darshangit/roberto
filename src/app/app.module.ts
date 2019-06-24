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
import {ConfirmationService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule, MultiSelectModule, SelectButtonModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


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
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    SelectButtonModule,
    MultiSelectModule,
    ConfirmDialogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
