import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ApiPhoto } from '../services/api.service';
import { FavoritosService } from '../services/favoritos.service';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  standalone: false
})
export class ExplorarPage implements OnInit {

  fotos: ApiPhoto[] = [];
  cargando: boolean = true;

  constructor(
    private apiService: ApiService,
    public favoritosService: FavoritosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.apiService.getFotos().subscribe({
      next: (data) => {
        this.fotos = data;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
      }
    });
  }

  async toggleFavorito(foto: ApiPhoto) {
    if (this.favoritosService.esFavorito(foto.id)) {
      await this.favoritosService.quitarFavorito(foto.id);
    } else {
      await this.favoritosService.agregarFavorito(foto);
    }
  }

  irAFavoritos() {
    this.router.navigate(['/favoritos']);
  }

  volver() {
    this.router.navigate(['/home']);
  }
}
