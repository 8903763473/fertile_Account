import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public app:AppComponent) {}
  searchText:any
  ngOnInit(): void {
    this.app.leftSide = true;
    this.app.topHeader = true;
    this.app.loader=true
    setTimeout(() => {
      this.app.loader = false; 
    }, 3000);
  }

}
