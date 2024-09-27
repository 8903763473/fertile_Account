import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-bill-generation',
  templateUrl: './bill-generation.component.html',
  styleUrls: ['./bill-generation.component.scss'],
})
export class BillGenerationComponent  implements OnInit {

  constructor(public app:AppComponent) { }
  searchText:any
  ngOnInit() {
    this.app.leftSide  = true;
    this.app.topHeader = true;
  }

}
