import { Injectable, Inject } from '@angular/core';
import { BROWSER_STORAGE } from './storage';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(@Inject(BROWSER_STORAGE) private storage:Storage) { }


  public getToken(): string {
    return this.storage.getItem('loc8r-token');
  }

  public saveToken(): void {
    this.storage.setItem('loc8r-token', 'token');
  }
}
