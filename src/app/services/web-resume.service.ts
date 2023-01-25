import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebResumeService {
  contentHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  constructor(private httpClient: HttpClient) {}

  getMenuIds() {
    const apiAddress = environment.API_URL + `en/menu.json`;
    const menuIds = this.httpClient.get(apiAddress, { headers: this.contentHeader })
    return menuIds;
  }
}
