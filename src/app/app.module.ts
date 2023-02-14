import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CustomTranslateLoader } from 'src/app/services/trans-loader';
import { AppComponent, AddUnderscorePipe, TransformIntro, TruncatePipe, DialogWork } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { IonicModule } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    AddUnderscorePipe,
    TransformIntro,
    TruncatePipe,
    DialogWork
  ],
  imports: [
    BrowserModule,
    AngularTypewriterEffectModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [TransformIntro],
  bootstrap: [AppComponent],
  exports: [TranslateModule, TransformIntro]
})
export class AppModule { }

export function translateLoaderFactory(httpClient: HttpClient) {
  return new CustomTranslateLoader(httpClient);
}
