import { Component } from '@angular/core';
import { AppState } from '../app.state';

@Component({
  selector: 'app-light',
  template: `
    <disqus [identifier]="identifier" [title]="title" (comment)="display($event)"></disqus>
    <!-- <button (click)="test()">TEST</button> -->
  `
})
export class LightComponent {

  identifier = '/ngx-disqus/';
  title = 'Light Theme';

  constructor(appState: AppState) {
    /** add dark class to app */

    appState.set('themeSwitcher', false);
    appState.set('themeName', 'Light Theme');
    appState.set('themeCover', 'assets/img/light.png');
  }

  display(comment) {
    console.log(`It works 😎 \n${JSON.stringify(comment)}`);
  }

  // test() {
  //   this.identifier = '/ngx-disqus/dark/';
  //   this.title = 'TEST';
  // }
}
