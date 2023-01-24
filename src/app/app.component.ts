import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebResume';
  lang = ['FR','EN'];
  lang_to_set = 1;

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en', 'fr']);
    translateService.setDefaultLang('fr');
  }

  ngOnInit() {
    // this.popper = new Popper(reference, this.target, this.defaultConfig);
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
