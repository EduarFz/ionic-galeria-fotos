import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiPhoto {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=20';

  constructor(private http: HttpClient) {}

  getFotos(): Observable<ApiPhoto[]> {
    return this.http.get<ApiPhoto[]>(this.apiUrl).pipe(
      (source) => new Observable(observer => {
        source.subscribe({
          next: (fotos: ApiPhoto[]) => {
            const fotosConImagenes = fotos.map((foto, index) => ({
              ...foto,
              thumbnailUrl: `https://picsum.photos/seed/${foto.id}/150/150`,
              url: `https://picsum.photos/seed/${foto.id}/600/600`
            }));
            observer.next(fotosConImagenes);
            observer.complete();
          },
          error: (e) => observer.error(e)
        });
      })
    );
  }
}
