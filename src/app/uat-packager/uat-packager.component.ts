import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-uat-packager',
  templateUrl: './uat-packager.component.html',
  styleUrls: ['./uat-packager.component.scss']
})
export class UatPackagerComponent implements OnInit {

  isPackageCreated = false;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }


  createPackage = () => {
    this.isPackageCreated = true;
    setTimeout(() => {
      this.isPackageCreated = false;
      this.toast('custom', 'info', 'Package Created Successfully', 'Package Located at: ', true);
    }, 3000);
  }

  toast = (key, severity, summary, detail, sticky) => {
    this.messageService.add({key, severity, summary, detail, sticky});
  }

}
