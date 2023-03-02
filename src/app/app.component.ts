import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WebResumeService } from './services/web-resume.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export interface RedirectionExtras extends NavigationExtras {
  target?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WebResume';
  lang = ['FR', 'EN'];
  lang_to_set = 1;
  skills: any;
  images: any;
  images_loaded: boolean = false;
  dialog_open: boolean = false;
  messageForm!: FormGroup;


  ngOnInit() {
    this.webResumeService.getSkills().subscribe((res) => {
      this.skills = res;
    });
    this.webResumeService.getImages().subscribe((res) => {
      this.images = res;
      this.images_loaded = true;
    });
    this.messageForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.minLength(4)]),
      message: new FormControl('', [Validators.required])
    })
  }

  get name() { return this.messageForm.get('name');}
  get email() { return this.messageForm.get('email');}
  get subject() { return this.messageForm.get('subject');}
  get message() { return this.messageForm.get('message');}

  constructor(
    public translateService: TranslateService,
    public dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document,
    public webResumeService: WebResumeService,
    public transformIntro: TransformIntro,
    private router: Router
  ) {
    translateService.addLangs(['en', 'fr']);
    translateService.setDefaultLang('fr');
  }

  SendEmail(e: Event): void {
    if(this.messageForm.valid){
      emailjs.sendForm('service_lrce4qw', 'template_5gyv1w8', e.target as HTMLFormElement, 'user_6l0A1l7CpEmESC2YnwLf7')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        this.messageForm.reset();
    } else {
      console.log('Form not valid');
    }
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
      document.documentElement.scrollTop > 20 ||
      this.dialog.openDialogs.length
    ) {
      document.getElementById('mainNav')?.classList.add('navbar-reduce');
      document.getElementById('mainNav')?.classList.remove('navbar-trans');
    } else {
      document.getElementById('mainNav')?.classList.add('navbar-trans');
      document.getElementById('mainNav')?.classList.remove('navbar-reduce');
    }
  }

  openDialog(data: any) {
    this.dialog_open = !this.dialog_open;
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
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dialog-work',
  templateUrl: './dialog-work.html',
  styleUrls: ['./app.component.css'],
})
export class DialogWork {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {work: string}) {

  }
}




