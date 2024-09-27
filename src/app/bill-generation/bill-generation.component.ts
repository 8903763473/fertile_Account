import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-bill-generation',
  templateUrl: './bill-generation.component.html',
  styleUrls: ['./bill-generation.component.scss'],
})
export class BillGenerationComponent  implements OnInit {
// stockItems array in your component
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
  // More items...
];

  constructor(public app:AppComponent) { }
  searchText:any
  ngOnInit() {
    this.app.leftSide  = true;
    this.app.topHeader = true;
  }

}
