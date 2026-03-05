import { Component, OnInit } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';
import { ModalController } from '@ionic/angular';
import { PhotoViewerComponent } from '../components/photo-viewer/photo-viewer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(
    public photoService: PhotoService,
    private modalCtrl: ModalController
  ) {}

  // Carga las fotos guardadas al abrir la pantalla
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  // Abre la cámara para tomar una foto
  async tomarFoto() {
    await this.photoService.addNewToGallery();
  }

  // Abre la foto seleccionada en pantalla completa
  async verFoto(photo: UserPhoto) {
    const modal = await this.modalCtrl.create({
      component: PhotoViewerComponent,
      componentProps: { photo }
    });
    await modal.present();
  }
}
