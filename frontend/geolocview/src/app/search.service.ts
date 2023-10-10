import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'https://api.example.com/search';

  constructor(private http: HttpClient) { }

  performSearch(query: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}?q=${query}`);
  }
}
