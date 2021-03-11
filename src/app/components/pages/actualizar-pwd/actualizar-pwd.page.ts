import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-actualizar-pwd',
  templateUrl: './actualizar-pwd.page.html',
  styleUrls: ['./actualizar-pwd.page.scss'],
})
export class ActualizarPwdPage implements OnInit {

  edicionForm: FormGroup;
  showPassword1 = false;
  showPassword2 = false;
  showPassword3 = false;

  passwordToggleIcon1 = 'eye';
  passwordToggleIcon2 = 'eye';
  passwordToggleIcon3 = 'eye';

  userId = 1;

  constructor(
    private formBuilder: FormBuilder,
    private menuCtrl: MenuController,
    private userService: UserService,
    private loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.menuCtrl.enable (true);
    this.edicionForm = this.formBuilder.group({
      passwordActual: [null, [Validators.required]],
      passwordNueva: [null, [Validators.required]],
      confirmacionPasswordNueva: [null, [Validators.required]]
    });
  }

  async guardar() {
    const loading = await this.loadingController.create({
      message: 'Guardando los cambios...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();
    console.log(this.edicionForm.value);
    if (this.edicionForm.value.passwordActual == null || this.edicionForm.value.passwordNueva == null || this.edicionForm.value.confirmacionPasswordNueva == null) {
      loading.dismiss();
      this.presentAlert1();
      return;
    }
    if (this.edicionForm.value.passwordNueva !== this.edicionForm.value.confirmacionPasswordNueva) {
      loading.dismiss();
      this.presentAlert2();
      return;
    }
    const user = { legajo: 'CLA12345', password: this.edicionForm.value.passwordNueva };
    this.userService.cambiarPassword(this.userId, user, loading);
  }

  togglePassword1() {
    this.showPassword1 = !this.showPassword1;
    if (this.passwordToggleIcon1 === 'eye') {
      this.passwordToggleIcon1 = 'eye-off';
    } else {
      this.passwordToggleIcon1 = 'eye';
    }
  }

  togglePassword2() {
    this.showPassword2 = !this.showPassword2;
    if (this.passwordToggleIcon2 === 'eye') {
      this.passwordToggleIcon2 = 'eye-off';
    } else {
      this.passwordToggleIcon2 = 'eye';
    }
  }

  togglePassword3() {
    this.showPassword3 = !this.showPassword3;
    if (this.passwordToggleIcon3 === 'eye') {
      this.passwordToggleIcon3 = 'eye-off';
    } else {
      this.passwordToggleIcon3 = 'eye';
    }
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      // subHeader: 'Subtitle',
      message: 'Debe completar todos los campos.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      // subHeader: 'Subtitle',
      message: 'La nueva contraseña no coincide en ambos campos.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }


}
