import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = "http://localhost:6969";
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    this.http.get(`${this.url}/api/login`, {
      responseType: "arraybuffer",
      params: {
        email,
        password,
      },
    }).subscribe((v) => {
        window.location.href = "/";
      });
  }

  signup(name: string, surname: string, email: string, password: string) {
    this.http.get(`${this.url}/api/signup`, {
      responseType: "blob",
      params: {
        name,
        surname,
        email,
        password,
      },
    }).subscribe((_) => {
        window.location.href = "/login";
      });
  }

  logout(): void {
    this.http.get(`${this.url}/api/logout`).subscribe(_ => {
      window.location.href = "/";
    });
  }
}
