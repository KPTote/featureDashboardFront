import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import featureHistory from '../../assets/feature-history.json';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<any> {
    const token = sessionStorage.getItem('token');

    if (environment.useMockData) {
      return of(featureHistory);
    }

    return this.http.get<any>(environment.urlBase + '/feature-history/', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

  }
}
