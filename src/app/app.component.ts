import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="navbar is-dark">
      <div class="navbar-brand">
      <div>
      <img src="assets/img/shop_logo.png"/>
      </div>
            <a class="navbar-item">
            Welcome to online shopping
            </a>
      </div>
  </div>
  
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
