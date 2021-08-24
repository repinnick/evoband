import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isBurgerMenu = false;
  isActive = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isBurgerMenu = event.target.innerWidth <= 860;
  }

  ngOnInit() {
    this.isBurgerMenu = window.innerWidth <= 860;
  }
}
