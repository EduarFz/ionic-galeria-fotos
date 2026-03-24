import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

const SESSION_KEY = 'session';
const USER_KEY = 'admin';
const PASS_KEY = '1234';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  async login(usuario: string, contrasena: string): Promise<boolean> {
    if (usuario === USER_KEY && contrasena === PASS_KEY) {
      await Preferences.set({ key: SESSION_KEY, value: 'activa' });
      return true;
    }
    return false;
  }

  async logout(): Promise<void> {
    await Preferences.remove({ key: SESSION_KEY });
  }

  async isLoggedIn(): Promise<boolean> {
    const { value } = await Preferences.get({ key: SESSION_KEY });
    return value === 'activa';
  }
}
