import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'evoband-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  isBurgerMenu = false;
  isActive = false;

  @HostListener('click')
  toggleActive(): void {
    this.isActive = !this.isActive;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isBurgerMenu = event.target.innerWidth <= 860;
  }

  ngOnInit() {
    this.isBurgerMenu = window.innerWidth <= 860;
  }
}
