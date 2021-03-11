import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionOperacionesPageRoutingModule } from './gestion-operaciones-routing.module';

import { GestionOperacionesPage } from './gestion-operaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionOperacionesPageRoutingModule
  ],
  declarations: [GestionOperacionesPage]
})
export class GestionOperacionesPageModule {}
