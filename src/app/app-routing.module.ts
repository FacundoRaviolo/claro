import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'actualizar-pwd',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'actualizar-pwd',
    loadChildren: () => import('./components/pages/actualizar-pwd/actualizar-pwd.module').then( m => m.ActualizarPwdPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'gestion-operaciones',
    loadChildren: () => import('./components/pages/gestion-operaciones/gestion-operaciones.module').then( m => m.GestionOperacionesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
