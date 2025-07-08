import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import featureHistory from '../../assets/feature-history.json';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<any>{
    const token = sessionStorage.getItem('token');

    // return this.http.get<any>( environment.urlBase + '/feature-history/', { headers: {
    //   'Authorization' : `Bearer ${token}`
    // }})

    return of(featureHistory);
  }
}
