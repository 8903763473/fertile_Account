import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BillGenerationComponent } from './bill-generation/bill-generation.component';
import { TableManagementComponent } from './table-management/table-management.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',component:LoginComponent
  },
  {
    path: 'BillGeneration',component:BillGenerationComponent
  },
  {
    path: 'tablemanagement',component:TableManagementComponent
  },
  {
    path: 'customerRegistration',component:CustomerRegistrationComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
