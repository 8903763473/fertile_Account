import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from '../service/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  mail: any;
  password: any

  constructor(public router: Router,public api:ApiService, public app: AppComponent,  private alertController: AlertController) { }

  loginData: any = {}

  ionViewWillEnter() {
    if (localStorage.getItem('isLogged') == 'true') {
      this.router.navigate(['/home']);
    }

    this.app.leftSide = false;
    this.app.topHeader = false;
    this.loginData = {
      Email: 'vijay@gmail.com',
      password: 'jenifer',
      admin_id: '66d6977806393071f3426ca6'
    }
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email) && email.endsWith('@gmail.com');
  }

  doLogin() {
    this.app.loader = true;
    const { Email, password } = this.loginData;
    if (!Email || !password) {
      this.showAlert('Invalid', 'Email or password missing', 'Try again');
      this.app.loader = false;
      return;
    }
    if (!this.validateEmail(Email)) {
      this.showAlert('Error', 'Invalid email format', 'Try again');
      this.app.loader = false;
      return;
    }
    console.log(this.loginData);


    this.api.Login(this.loginData).subscribe({
      next: (data: any) => {
        console.log(data);
        localStorage.setItem('isLogged', 'true');
        this.app.loader = false;
        localStorage.setItem("token", data.token);
        localStorage.setItem("admin_id", data.admin.admin_id);
        localStorage.setItem("userName", data.admin.userName);
        localStorage.setItem("applogo_id", data.admin.applogo_id);
        localStorage.setItem("userId", data.admin._id);
        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        console.log(err);
        this.app.loader = false;
        this.showAlert('Error', 'Error while logging in!', 'Try again');
      }
    });
  }

  async showAlert(header: any, message: any, button: any) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [button],
    });

    await alert.present();
  }

}
