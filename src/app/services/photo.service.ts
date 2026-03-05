import { Injectable } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo
} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

// Interfaz para definir la estructura de cada foto guardada
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

// Clave para guardar las fotos en almacenamiento local
const PHOTO_STORAGE = 'photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  // Array que contiene todas las fotos tomadas
  public photos: UserPhoto[] = [];

  constructor() {}

  // Carga las fotos guardadas al iniciar la app
  public async loadSaved() {
    const { value } = await Preferences.get({ key: PHOTO_STORAGE });
    this.photos = (value ? JSON.parse(value) : []) as UserPhoto[];

    // En web se leen los archivos como base64 para mostrarlos
    for (let photo of this.photos) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data
      });
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }

  // Abre la cámara, toma la foto y la guarda
  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 90
    });

    const savedPhoto = await this.savePicture(capturedPhoto);
    this.photos.unshift(savedPhoto);

    // Guarda la lista actualizada en almacenamiento local
    await Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(this.photos)
    });
  }

  // Convierte la foto y la guarda en el sistema de archivos
  private async savePicture(photo: Photo): Promise<UserPhoto> {
    const base64Data = await this.readAsBase64(photo);
    const fileName = `foto_${Date.now()}.jpeg`;

    await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }

  // Convierte la foto a base64 según la plataforma
  private async readAsBase64(photo: Photo): Promise<string> {
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  }
}
