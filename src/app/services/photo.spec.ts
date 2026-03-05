import { TestBed } from '@angular/core/testing';
import { PhotoService } from './photo.service';

// Prueba básica para verificar que el servicio se crea correctamente
describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
