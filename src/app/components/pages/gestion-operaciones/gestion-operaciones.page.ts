import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-gestion-operaciones',
  templateUrl: './gestion-operaciones.page.html',
  styleUrls: ['./gestion-operaciones.page.scss'],
})
export class GestionOperacionesPage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

}
