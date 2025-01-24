import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';

interface TokenResponse {
  accessToken: string; // Токен доступу
  refreshToken?: string; // Рефреш-токен (опціональний)
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private cookieService = inject(CookieService);

  private baseApiUrl = `https://icherniakov.ru/yt-course/auth/`;

  token: string | null = null;
  refreshToken: string | null = null;

  // Геттер, який перевіряє автентифікацію
  get isAuth(): boolean {
    return !!this.token || this.cookieService.check('token'); // Додано перевірку в кукі
  }

  login(payload: { username: string; password: string }): Observable<TokenResponse> {
    const fd = new FormData();
    fd.append('username', payload.username);
    fd.append('password', payload.password);

    return this.http.post<TokenResponse>(`${this.baseApiUrl}token`, fd).pipe(
      tap((response: TokenResponse) => {
        // Зберігаємо токени в localStorage та кукі
        this.token = response.accessToken;
        this.refreshToken = response.refreshToken || null;

        localStorage.setItem('accessToken', response.accessToken);
        if (response.refreshToken) {
          localStorage.setItem('refreshToken', response.refreshToken);
        }

        this.cookieService.set('token', response.accessToken);
        if (response.refreshToken) {
          this.cookieService.set('refreshToken', response.refreshToken);
        }

        console.log('Login successful:', response);
      })
    );
  }

  logout(): void {
    // Очищення токенів
    this.token = null;
    this.refreshToken = null;

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    this.cookieService.delete('token');
    this.cookieService.delete('refreshToken');

    console.log('User logged out');
  }
}


