import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { type Thougth } from '../interfaces/thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private httpClient = inject(HttpClient);
  private readonly API = 'http://localhost:3000/pensamentos';

  listThoughts(): Observable<Thougth[]>{
    return this.httpClient.get<Thougth[]>(this.API)
  }
  createThought(newThought: Thougth): Observable<Thougth>{
    return this.httpClient.post<Thougth>(this.API, newThought);
  }

  deleteThought(id: number): Observable<Thougth>{
    const url = `${this.API}/${id}`;
    return this.httpClient.delete<Thougth>(url);
  }

  searchThought(id: number): Observable<Thougth>{
    const url = `${this.API}/${id}`;
    return this.httpClient.get<Thougth>(url);
  }
}
