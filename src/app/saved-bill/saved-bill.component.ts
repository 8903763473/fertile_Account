import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-saved-bill',
  templateUrl: './saved-bill.component.html',
  styleUrls: ['./saved-bill.component.scss'],
})
export class SavedBillComponent  implements OnInit {

  selectedTab:any;
  searchText:any;
  isDatePicker:boolean=false;
  BillPopup:boolean=false;

  TableData:any = [
    { id: "016", table: "A1", date: "10/20/2050", time: "10:50 pm", customer: "Ramisha", phone: "9876543234", payment: "Cash", amount: "140.00", status: "Paid" },
    { id: "026", table: "A2", date: "10/20/2050", time: "10:50 pm", customer: "Ramisha", phone: "9876543234", payment: "Cash", amount: "140.00", status: "Paid" },
    { id: "036", table: "A5", date: "10/20/2050", time: "10:50 pm", customer: "Ramisha", phone: "9876543234", payment: "Cash", amount: "140.00", status: "Paid" },
];


  constructor(public app:AppComponent) { }

  ngOnInit() {
    this.app.leftSide  = true;
    this.app.topHeader = true;
    this.BillPopup = false;
    this.selectedTab = 1;
  }

  tabClick(id:any){
    this.selectedTab = id;
  }

  onDateSelected(data:any){
    console.log(data);    
  }
}
