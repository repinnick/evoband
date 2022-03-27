import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'evoband-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit{
  public isBurgerMenu = false;
  public isActive = false;
  public isScrollEvent = false;

  @HostListener('window:resize', ['$event'])
  private onResize(event: any): void {
    this.isBurgerMenu = event.target.innerWidth <= 860;
  }

  @HostListener('window:scroll', [])
  private onScroll(): void {
    this.isScrollEvent = window.innerHeight < window.pageYOffset + 78;
  }

  ngOnInit(): void {
    this.isBurgerMenu = window.innerWidth <= 860;
  }

  public toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
