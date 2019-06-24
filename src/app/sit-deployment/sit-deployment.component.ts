import { Component, OnInit } from '@angular/core';
import {ConfirmationService, Message, MessageService, SelectItem} from 'primeng/api';
import {ServiceIntegratorService} from '../service/service-integrator.service';

@Component({
  selector: 'app-sit-deployment',
  templateUrl: './sit-deployment.component.html',
  styleUrls: ['./sit-deployment.component.scss']
})
export class SitDeploymentComponent implements OnInit {

  isISPDeployed = false;
  isASGDeployed = false;
  selectedTypes: string[] = [];
  types: SelectItem[];

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private serviceIntegrator: ServiceIntegratorService) { }

  ngOnInit() {
    this.types = [
      {label: 'ISP', value: 'ISP', icon: 'fas fa-italic'},
      {label: 'ASG', value: 'ASG', icon: 'fab fa-autoprefixer'},
    ];
  }

  deployToSIT = () => {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed deployment to SIT?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.clear();

        this.selectedTypes.forEach(type => {

          if (type === 'ISP') {
            this.isISPDeployed = true;

            this.serviceIntegrator.deployISP().subscribe(resp => {
              console.log('ISP Deployed', resp);
              this.isISPDeployed = false;
              this.toast('success', 'success', 'Wohoo !!!', 'Successfully Deployed ISP to SIT', true);
            }, () => {
              this.isISPDeployed = false;
              this.toast('success', 'error', 'Failed !!!', 'Failed Deploying ISP to SIT', true);
            });


          } else if (type === 'ASG') {
            this.isASGDeployed = true;

            this.serviceIntegrator.deployASG().subscribe(resp => {
              console.log('ASG Deployed', resp);
              this.isASGDeployed = false;
              this.toast('success', 'success', 'Wohoo !!!', 'Successfully Deployed ASG to SIT', true);
            }, () => {
              this.isASGDeployed = false;

              this.toast('success', 'error', 'Failed !!!', 'Failed Deploying ASG to SIT', true);
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
