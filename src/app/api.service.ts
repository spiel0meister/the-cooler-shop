import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = "https://localhost:6969";
  constructor(private http: HttpClient) {}
  request(path: string) {
    return this.http.get(`${this.url}${path}`);
  }
}
