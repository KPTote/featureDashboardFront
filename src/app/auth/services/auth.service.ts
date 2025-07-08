import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import loginData from '../../assets/login.json';
import { AuthResponse } from '../../interfaces/dashboard.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, pass: string): Observable<AuthResponse> {

    // return this.http.post<AuthResponse>( environment.urlBase + '/auth/login', { email, password: pass })

    return of(loginData)

  }
}
