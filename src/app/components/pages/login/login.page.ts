import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  showPassword = false;
  passwordToggleIcon = 'eye';

  userId = 1;

  constructor(
    private formBuilder: FormBuilder,
    private menuCtrl: MenuController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.loginForm = this.formBuilder.group({
      legajo: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  login() {
    // TODO: LOGIN...
    this.presentAlert();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon === 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '...',
      // subHeader: 'Subtitle',
      message: 'Inicio de sesión no implementado.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}
