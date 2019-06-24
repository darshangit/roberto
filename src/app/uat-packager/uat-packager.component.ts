import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService, SelectItem} from 'primeng/api';
import {ServiceIntegratorService} from '../service/service-integrator.service';

@Component({
  selector: 'app-uat-packager',
  templateUrl: './uat-packager.component.html',
  styleUrls: ['./uat-packager.component.scss']
})
export class UatPackagerComponent implements OnInit {

  isISPPackageCreated = false;
  isASGPackageCreated = false;
  selectedTypes: string[] = [];
  types: SelectItem[];

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private serviceIntegrator: ServiceIntegratorService ) { }

  ngOnInit() {
    this.types = [
      {label: 'ISP', value: 'ISP', icon: 'fas fa-italic'},
      {label: 'ASG', value: 'ASG', icon: 'fab fa-autoprefixer'},
    ];
  }

  createPackage = () => {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed to create UAT Package?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.clear();

        this.selectedTypes.forEach(type => {

          if (type === 'ISP') {
            this.isISPPackageCreated = true;

            this.serviceIntegrator.packageISP().subscribe(resp => {
              console.log('ISP Package Created', resp);
              this.isISPPackageCreated = false;
              this.toast('custom', 'info', 'ISP Package Created Successfully', 'Package Located at: ', true);
            }, () => {
              this.isISPPackageCreated = false;
              this.toast('error', 'error', 'Failed !!!', 'Failed Creating ISP UAT Package', true);
            });


          } else if (type === 'ASG') {
            this.isASGPackageCreated = true;
            this.serviceIntegrator.packageASG().subscribe(resp => {
              console.log('ASG Package Created', resp);
              this.isASGPackageCreated = false;
              this.toast('custom', 'info', 'ASG Package Created Successfully', 'Package Located at: ', true);
            }, () => {
              this.isASGPackageCreated = false;
              this.toast('error', 'error', 'Failed !!!', 'Failed Creating ASG UAT Package', true);
            });
          }
        });
      },
      reject: () => {
      }
    });


  }

  toast = (key, severity, summary, detail, sticky) => {
    this.messageService.add({key, severity, summary, detail, sticky});
  }

}
