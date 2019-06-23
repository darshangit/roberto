import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-sit-deployment',
  templateUrl: './sit-deployment.component.html',
  styleUrls: ['./sit-deployment.component.scss']
})
export class SitDeploymentComponent implements OnInit {

  isDeployed = false;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  deployToSIT = () => {
    this.isDeployed = true;

    setTimeout(() => {
      this.isDeployed = false;
      this.toast('success', 'success', 'Wohoo !!!', 'Successfully Deployed on SIT', true);
    }, 3000);
  }

  toast = (key, severity, summary, detail, sticky) => {
    this.messageService.add({key, severity, summary, detail, sticky});
  }

}
