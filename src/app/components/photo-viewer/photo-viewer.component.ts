import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserPhoto } from '../../services/photo.service';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss'],
  standalone: false,
})
export class PhotoViewerComponent {

  // Foto que se recibe desde la galería
  @Input() photo!: UserPhoto;

  constructor(private modalCtrl: ModalController) {}

  // Cierra el visor y vuelve a la galería
  cerrar() {
    this.modalCtrl.dismiss();
  }
}
