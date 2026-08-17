import { isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

const LOCAL_STORAGE_KEY = 'CODE_CONNECT_IS_AUTHENTICATED';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  
  private _isAuthorized = signal<boolean>(this.retrieveDataFromStorage());

  constructor() {
    effect(() => {
      if (this.isBrowser) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this._isAuthorized()));
      }
    });
  }

  isAuthorized(): boolean {
    return this._isAuthorized();
  }

  login() {
    this._isAuthorized.set(true);
  }
  
  logout() {
    this._isAuthorized.set(false);
  }

  private retrieveDataFromStorage(): boolean {
    if (!this.isBrowser) return false;
    
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!data) return false;

    try {
      return JSON.parse(data) as boolean;
    } catch {
      return false;
    }
  }
}
