import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'evoband-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public isBurgerMenu = false;
  public isActive = false;

  @HostListener('window:resize', ['$event'])
  private onResize(event: any): void {
    this.isBurgerMenu = event.target.innerWidth <= 860;
  }

  ngOnInit(): void {
    this.isBurgerMenu = window.innerWidth <= 860;
  }

  public toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
