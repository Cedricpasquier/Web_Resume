import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomTranslateLoader } from 'src/app/services/trans-loader';
import { AppComponent, AddUnderscorePipe } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';


@NgModule({
  declarations: [
    AppComponent,
    AddUnderscorePipe
  ],
  imports: [
    BrowserModule,
    AngularTypewriterEffectModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TranslateModule]
})
export class AppModule { }

export function translateLoaderFactory(httpClient: HttpClient) {
  return new CustomTranslateLoader(httpClient);
}
