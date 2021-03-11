import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://604a1f599251e100177cdf8c.mockapi.io';

  constructor(
    private http: HttpClient,
    public alertController: AlertController,
    private router: Router
  ) { }

    cambiarPassword(userId, datos, loading): any {
      this.http.put<any>(`${this.url}/users/${userId}`, datos).subscribe({
        complete: () => { loading.dismiss(); this.exito() },
        error: () => { loading.dismiss(); this.error() }
      });
    }

    async exito() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Éxito',
        // subHeader: 'Subtitle',
        message: 'La contraseña ha sido modificada con éxito.',
        buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              this.router.navigate(['gestion-operaciones']);
            }
          }
        ]
      });
    
      await alert.present();
    }
    
    async error() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        // subHeader: 'Subtitle',
        message: 'Ha ocurrido un error al intentar modificar la contraseña.',
        buttons: ['Aceptar']
      });
    
      await alert.present();
    }
  
}
