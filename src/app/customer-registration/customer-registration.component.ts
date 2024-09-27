import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss'],
})
export class CustomerRegistrationComponent  implements OnInit {

  dummy: any = [
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    },
    {
      id: 1
    }
  ];

  isDatePicker: boolean = false
  selectedDate: any;

  constructor(public app: AppComponent) { }

  ionViewWillEnter() {
    this.app.leftSide = true
    this.app.topHeader = true
  }

  onDateSelected(event: any) {
    this.selectedDate = event.detail.value;
    this.isDatePicker = false
  }
  ngOnInit() {
    this.app.leftSide  = true;
    this.app.topHeader = true;
  }

}
