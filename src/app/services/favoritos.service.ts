import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { ApiPhoto } from './api.service';

const FAVORITOS_KEY = 'favoritos';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  public favoritos: ApiPhoto[] = [];

  async cargarFavoritos(): Promise<void> {
    const { value } = await Preferences.get({ key: FAVORITOS_KEY });
    this.favoritos = value ? JSON.parse(value) : [];
  }

  async agregarFavorito(foto: ApiPhoto): Promise<void> {
    this.favoritos.unshift(foto);
    await Preferences.set({
      key: FAVORITOS_KEY,
      value: JSON.stringify(this.favoritos)
    });
  }

  async quitarFavorito(id: number): Promise<void> {
    this.favoritos = this.favoritos.filter(f => f.id !== id);
    await Preferences.set({
      key: FAVORITOS_KEY,
      value: JSON.stringify(this.favoritos)
    });
  }

  esFavorito(id: number): boolean {
    return this.favoritos.some(f => f.id === id);
  }
}
