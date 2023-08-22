import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginauth',
  templateUrl: './loginauth.page.html',
  styleUrls: ['./loginauth.page.scss'],
})
export class LoginauthPage implements OnInit {
  //credentials: FormGroup;
  email2:any;
  pwd2:any;
 


  constructor(private loadingController: LoadingController,
    private authSV: AuthService,
    private router: Router,
    private alertController: AlertController,) { }


  ngOnInit() {
  }


  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
   
    const user = await this.authSV.login(this.email2,this.pwd2);
    await loading.dismiss();
   
    if (user)
      this.router.navigateByUrl('/homedb', { replaceUrl: true });
    else
      this.showAlert('Login failed', 'Please try again!');


   
}


async showAlert(header:string, message:string) {
    const alert = await this.alertController.create({
    header,
    message,
    buttons: ['OK']

});
 await alert.present();


}

async Register() {
const alert = await this.alertController.create({
  header: 'Register',
  inputs: [
    {
      name: 'email',
      placeholder: 'Email',
      type: 'email',
    },
    {
      name: 'password',
      placeholder: 'Password',
      type: 'text',
    }
  ],
  buttons: [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'Register',
      handler: async (res) => {
        const loading = await this.loadingController.create();
        await loading.present();

        const user = await this.authSV.register(res.email, res.password);
        await loading.dismiss();

        if (user) {
          this.router.navigateByUrl('/home-db', { replaceUrl: true });
        } else {
          this.showAlert("Register Fail", "Please try again!")
        }
      }
    }
  ]
});
await alert.present();
}
}