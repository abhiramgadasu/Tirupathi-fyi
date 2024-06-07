import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  uri = environment.url;
  private tokenKey = 'authToken';
  private userKey = 'user';
  private isLoginSubject = new BehaviorSubject<boolean>(this.isLogin());

  constructor(private http: HttpClient) { }

  get isLogin$(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.uri}login`, data);
    // return this.http.post(`${this.uri}Auth/login`, data);
  }

  isLogin(): boolean {
    const token = sessionStorage.getItem(this.tokenKey);
    return !!token && token !== 'null' && token.trim() !== '';
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  logout() {
    sessionStorage.removeItem(this.tokenKey);
    this.isLoginSubject.next(false);
  }

  setToken(token: string): void {
    sessionStorage.setItem(this.tokenKey, token);
    this.isLoginSubject.next(true);
  }
}
