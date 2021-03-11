import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', icon: 'home' },
    { title: 'Avisos', icon: 'notifications' },
    { title: 'Guardias', icon: 'calendar' },
    { title: 'Alarmas', icon: 'alarm' },
    { title: 'SES', icon: 'calendar' },
  ];
 
  constructor(
    private router: Router
  ) {}

  cerrarSesion() {
    // Lógica de cierre de sesión
    this.router.navigate(['login']);
  }
}
