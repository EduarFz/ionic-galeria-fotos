import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService, UserPhoto } from '../services/photo.service';
import { ModalController } from '@ionic/angular';
import { PhotoViewerComponent } from '../components/photo-viewer/photo-viewer.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(
    public photoService: PhotoService,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  async tomarFoto() {
    await this.photoService.addNewToGallery();
  }

  async verFoto(photo: UserPhoto) {
    const modal = await this.modalCtrl.create({
      component: PhotoViewerComponent,
      componentProps: { photo }
    });
    await modal.present();
  }

  async cerrarSesion() {
    await this.authService.logout();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
