import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService, SelectItem} from 'primeng/api';

@Component({
  selector: 'app-uat-packager',
  templateUrl: './uat-packager.component.html',
  styleUrls: ['./uat-packager.component.scss']
})
export class UatPackagerComponent implements OnInit {

  isPackageCreated = false;
  selectedTypes: string[] = [];
  types: SelectItem[];

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) { }

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

        this.isPackageCreated = true;

        setTimeout(() => {
          this.isPackageCreated = false;
          this.selectedTypes = [];
          this.toast('custom', 'info', 'Package Created Successfully', 'Package Located at: ', true);
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
