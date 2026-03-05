import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { PhotoViewerComponent } from '../components/photo-viewer/photo-viewer.component';

// Módulo de la pantalla principal con galería
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    PhotoViewerComponent // componente para ver foto en pantalla completa
  ]
})
export class HomePageModule {}
