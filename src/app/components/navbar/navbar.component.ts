import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navbg: any = {
    'background-color': '#000000',
  };

  @HostListener('document:scroll') scrollover() {
    if (window.scrollY > 0) {
      this.navbg = {
        color: 'black',
        'background-color': '#eeeeee',
      };
    } else {
      this.navbg = {
        'background-color': '#000000',
      };
    }
  }
}
