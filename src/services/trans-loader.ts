import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';


@Injectable()
export class CustomTranslateLoader implements TranslateLoader  {
    contentHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    constructor(private httpClient: HttpClient) {}
    getTranslation(lang: string): Observable<any> {
        const apiAddress = environment.API_URL + `${lang}.json`;
        return this.httpClient.get(apiAddress, { headers: this.contentHeader })
    }
}
