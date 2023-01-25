import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WebResumeService } from './services/web-resume.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebResume';
  lang = ['FR','EN'];
  lang_to_set = 1;
  menu_ids =  ['home', 'about', 'service', 'work', 'blog'];

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en', 'fr']);
    translateService.setDefaultLang('fr');
  }

  ngOnInit() {
  }

  setLang(): void {
    if (this.lang_to_set){
      this.lang_to_set = 0;
      this.translateService.use('en');
    } else {
      this.lang_to_set = 1;
      this.translateService.use('fr');
    }

  }
}

import { Pipe, PipeTransform } from '@angular/core';
  @Pipe({ name: 'addUnderscore' })
  export class AddUnderscorePipe implements PipeTransform {
    transform(value: any, args?: any): any {
      return value.replace(" ","_");
    }
  }
