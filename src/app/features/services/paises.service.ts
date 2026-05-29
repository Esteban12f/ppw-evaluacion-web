import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { Welcome } from '../models/paises.interface';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class PaisesService {
  private http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getPaises(): Observable<Welcome[]> {
    return this.http.get<Welcome[]>(`${this.baseUrl}/all`);
  }

  getPaisByName(name: string): Observable<Welcome[]> {
    return this.http.get<Welcome[]>(`${this.baseUrl}/name/${name}`).pipe(delay(300));
  }
}

