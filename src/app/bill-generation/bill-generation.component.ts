import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-bill-generation',
  templateUrl: './bill-generation.component.html',
  styleUrls: ['./bill-generation.component.scss'],
})
export class BillGenerationComponent  implements OnInit {
  
  BillPopup:boolean=false;
  
stockItems = [
  {
    code: '123',
    itemName: 'Panneer Tikka',
    qty: 1,
    rate: 250.00,
    amount: 250.00,
  },
  {
    code: '456',
    itemName: 'Butter Naan',
    qty: 2,
    rate: 50.00,
    amount: 100.00,
  },
];


TableData:any = [
  { id: "016", table: "A1", date: "10/20/2050", time: "10:50 pm", customer: "Ramisha", phone: "9876543234", payment: "Cash", amount: "140.00", status: "Paid" },
  { id: "026", table: "A2", date: "10/20/2050", time: "10:50 pm", customer: "Ramisha", phone: "9876543234", payment: "Cash", amount: "140.00", status: "Paid" },
  { id: "036", table: "A5", date: "10/20/2050", time: "10:50 pm", customer: "Ramisha", phone: "9876543234", payment: "Cash", amount: "140.00", status: "Paid" },
];

  constructor(public app:AppComponent) { }
  searchText:any
  ngOnInit() {
    this.BillPopup = true
    this.app.leftSide  = true;
    this.app.topHeader = true;
  }

}
