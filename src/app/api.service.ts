import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = "http://localhost:6969";

  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser = this.currentUserSubject.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  checkAuth() {
    this.http.get<{ auth: boolean, userId: string }>(`${this.url}/api/auth-check`)
      .subscribe({
        next: (res) => {
          if (res.auth) {
            this.currentUserSubject.next({ userId: res.userId });
            this.isLoggedInSubject.next(true);
          } else {
            this.currentUserSubject.next(null);
            this.isLoggedInSubject.next(false);
          }
        },
      });
  }

  login(email: string, password: string) {
    this.http.get(`${this.url}/api/login`, {
      responseType: "arraybuffer",
      params: {
        email,
        password,
      },
    }).subscribe((v) => {
      this.checkAuth();
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
      this.currentUserSubject.next(null);
      this.isLoggedInSubject.next(false);
      window.location.href = "/";
    });
  }
}
