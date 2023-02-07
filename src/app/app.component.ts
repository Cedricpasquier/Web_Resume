import { Component, HostListener, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WebResumeService } from './services/web-resume.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WebResume';
  lang = ['FR', 'EN'];
  lang_to_set = 1;
  menu_ids = ['home', 'about', 'service', 'work', 'blog'];
  skills: any;
  images: any;

  constructor(
    public translateService: TranslateService,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document,
    public webResumeService: WebResumeService,
    public transformIntro: TransformIntro
  ) {
    translateService.addLangs(['en', 'fr']);
    translateService.setDefaultLang('fr');
  }

  ngOnInit() {
    this.webResumeService.getSkills().subscribe((res) => {
      this.skills = res;
    });
    this.webResumeService.getImages().subscribe((res) => {
      this.images = res;
    });
  }

  setLang(): void {
    if (this.lang_to_set) {
      this.lang_to_set = 0;
      this.translateService.use('en');
    } else {
      this.lang_to_set = 1;
      this.translateService.use('fr');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById('mainNav')?.classList.add('navbar-reduce');
      document.getElementById('mainNav')?.classList.remove('navbar-trans');
    } else {
      document.getElementById('mainNav')?.classList.add('navbar-trans');
      document.getElementById('mainNav')?.classList.remove('navbar-reduce');
    }
  }

  openDialog(data: any) {
    this.dialog.open(DialogWork, {
      data: {
        work: 'work.'+ data
      },
    });
  }
}
import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
@Pipe({ name: 'addUnderscore' })
export class AddUnderscorePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.replace(' ', '_');
  }
}
@Pipe({ name: 'transformIntro' })
export class TransformIntro implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.split('  ');
  }
}
@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}

import { NgModule } from '@angular/core';

@Component({
  selector: 'dialog-work',
  templateUrl: './dialog-work.html',
  styleUrls: ['./app.component.css'],
})
export class DialogWork {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {work: string}) {

  }
}




