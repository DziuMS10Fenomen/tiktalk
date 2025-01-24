import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';




@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  baseApiUrl = `https://icherniakov.ru/yt-course/account/test_accounts`;
  constructor(private http:HttpClient) {}
  getTestAccounts() {
    return this.http.get<Profile[]>(this.baseApiUrl);
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}me`);
  }


}
