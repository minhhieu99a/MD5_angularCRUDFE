import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {City} from '../city';
import {Country} from '../country';

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<City[]> {
    return this.http.get<City[]>(`${API_URL}/city`);
  }

  createNewCity(data): Observable<City> {
    return this.http.post<City>(`${API_URL}/city`, data);
  }
  findById(id): Observable<City> {
    return this.http.get<City>(`${API_URL}/city/${id}`);
  }
  updateCity(id, data): Observable<City> {
    return this.http.put<City>(`${API_URL}/city/${id}`, data);
  }
  getAllCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(`${API_URL}/city/country`);
  }
  deleteCity(id): Observable<City> {
    return this.http.delete<City>(`${API_URL}/city/${id}`);
  }
}
