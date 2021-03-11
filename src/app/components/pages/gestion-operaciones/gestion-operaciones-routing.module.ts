import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionOperacionesPage } from './gestion-operaciones.page';

const routes: Routes = [
  {
    path: '',
    component: GestionOperacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionOperacionesPageRoutingModule {}
