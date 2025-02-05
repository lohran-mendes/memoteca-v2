import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { type Thought as Thought } from '../interfaces/thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private httpClient = inject(HttpClient);
  private readonly API = 'http://localhost:3000/pensamentos';

  listThoughts(): Observable<Thought[]>{
    return this.httpClient.get<Thought[]>(this.API)
  }
  createThought(newThought: Thought): Observable<Thought>{
    return this.httpClient.post<Thought>(this.API, newThought);
  }

  editThought(thought: Thought): Observable<Thought> {
    const url = `${this.API}/${thought.id}`;
    return this.httpClient.put<Thought>(url, thought)
  }

  deleteThought(id: number): Observable<Thought>{
    const url = `${this.API}/${id}`;
    return this.httpClient.delete<Thought>(url);
  }

  searchThought(id: number): Observable<Thought>{
    const url = `${this.API}/${id}`;
    return this.httpClient.get<Thought>(url);
  }
}
