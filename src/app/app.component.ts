import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'About', url: 'about', icon: 'add' },
    { title: 'Contact', url: 'contact', icon: 'paper-plane' },
    { title: 'Homedb', url: 'homedb', icon: 'ellipsis-horizontal' },
    { title: 'Login', url: 'loginauth', icon: 'add' },
    
  ];

}
