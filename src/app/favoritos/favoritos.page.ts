import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritosService } from '../services/favoritos.service';
import { ApiPhoto } from '../services/api.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: false
})
export class FavoritosPage implements OnInit {

  constructor(
    public favoritosService: FavoritosService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.favoritosService.cargarFavoritos();
  }

  async eliminar(id: number) {
    await this.favoritosService.quitarFavorito(id);
  }

  volver() {
    this.router.navigate(['/explorar']);
  }
}
