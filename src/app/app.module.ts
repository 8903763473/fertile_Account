import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableManagementComponent } from './table-management/table-management.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { BillGenerationComponent } from './bill-generation/bill-generation.component';

@NgModule({
  declarations: [AppComponent,LoginComponent,TableManagementComponent,CustomerRegistrationComponent,BillGenerationComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
