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

  getSkills(): Observable<any> {
    const apiAddress = environment.API_URL + `skills.json`;
    return this.httpClient.get(apiAddress, { headers: this.contentHeader })
  }

  getImages(): Observable<any> {
    const apiAddress = environment.API_URL + `pictures.json`;
    return this.httpClient.get(apiAddress, { headers: this.contentHeader })
  }
}
