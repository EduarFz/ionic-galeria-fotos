import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {

  usuario: string = '';
  contrasena: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  async login() {
    const exito = await this.authService.login(this.usuario, this.contrasena);
    if (exito) {
      this.router.navigate(['/home'], { replaceUrl: true });
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Usuario o contraseña incorrectos',
        duration: 2000,
        color: 'danger',
        position: 'bottom'
      });
      await toast.present();
    }
  }
}
