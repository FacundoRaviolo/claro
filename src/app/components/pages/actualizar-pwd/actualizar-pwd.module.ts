import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarPwdPageRoutingModule } from './actualizar-pwd-routing.module';

import { ActualizarPwdPage } from './actualizar-pwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ActualizarPwdPageRoutingModule
  ],
  declarations: [ActualizarPwdPage]
})
export class ActualizarPwdPageModule {}
