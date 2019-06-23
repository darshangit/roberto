import { Component, OnInit } from '@angular/core';
import {ConfirmationService, Message, MessageService, SelectItem} from 'primeng/api';

@Component({
  selector: 'app-sit-deployment',
  templateUrl: './sit-deployment.component.html',
  styleUrls: ['./sit-deployment.component.scss']
})
export class SitDeploymentComponent implements OnInit {

  isDeployed = false;
  selectedTypes: string[] = [];
  types: SelectItem[];

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) { }

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

        this.isDeployed = true;

        setTimeout(() => {
          this.isDeployed = false;
          this.selectedTypes = [];
          this.toast('success', 'success', 'Wohoo !!!', 'Successfully Deployed on SIT', true);
        }, 3000);
        },
      reject: () => {
      }
    });

  }

  toast = (key, severity, summary, detail, sticky) => {
    this.messageService.add({key, severity, summary, detail, sticky});
  }

}
