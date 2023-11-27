import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // Simulate authentication logic (replace with your actual logic)
    this.isAuthenticated = username === 'admin' && password === 'admin';
    return this.isAuthenticated;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }


}
