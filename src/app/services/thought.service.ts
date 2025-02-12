import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { type Thought } from '../interfaces/thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private httpClient = inject(HttpClient);
  private readonly API = 'http://localhost:3000/pensamentos';

  listThoughts(page: number, filter: string): Observable<Thought[]> {
    const itensForPage: number = 6;
    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', itensForPage);

    if(filter.trim().length > 2){
    params = params.set('q', filter)
    }
    // Retorno da documentação da API de como retornar os itens páginados
    // GET /posts?_page=7&_limit=20
    // Modo alternativo usando template strings para retornar os itens páginados
    // return this.httpClient.get<Thought[]>(`${this.API}?_page=${page}&_limit=${itensForPage}`)
    return this.httpClient.get<Thought[]>(this.API, { params });
  }
  createThought(newThought: Thought): Observable<Thought> {
    return this.httpClient.post<Thought>(this.API, newThought);
  }

  editThought(thought: Thought): Observable<Thought> {
    const url = `${this.API}/${thought.id}`;
    return this.httpClient.put<Thought>(url, thought);
  }

  deleteThought(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.httpClient.delete<Thought>(url);
  }

  searchThought(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.httpClient.get<Thought>(url);
  }
}
