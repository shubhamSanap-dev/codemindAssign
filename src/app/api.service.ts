
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = 'aec55bde55fa4781a1a1d299d51edc2b';
  private baseUrl = 'https://api.spoonacular.com';

  constructor(private http: HttpClient) { }

  getSearchResults(searchText: string): Observable<any> {
    const url = `${this.baseUrl}/recipes/complexSearch?query=${searchText}&number=5&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  getRecipeInformation(id: number): Observable<any> {
    const url = `${this.baseUrl}/recipes/${id}/information?includeNutrition=false&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  getInstructions(id: number): Observable<any> {
    const url = `${this.baseUrl}/recipes/${id}/analyzedInstructions?apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
