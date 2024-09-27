import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss'],
})
export class CustomerRegistrationComponent  implements OnInit {

  constructor(public app:AppComponent) { }

  ngOnInit() {
    this.app.leftSide  = true;
    this.app.topHeader = true;
  }

}
