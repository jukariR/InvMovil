import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alert: AlertController) {}

  async Alert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Stock',
      inputs: [
        {
          name: 'Cambiar stock',
          type: 'text',
          placeholder: '500'
        }],
      message: 'Ingrese la cantidad de stock deseada',
      buttons: ['Cancel', 'Update']
    });

    await alert.present();
  }

}
