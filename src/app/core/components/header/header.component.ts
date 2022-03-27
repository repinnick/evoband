import { Component, HostListener, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

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

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.isBurgerMenu = window.innerWidth <= 860;
  }

  public toggleActive(): void {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.renderer.addClass(document.body, 'no-scroll');
      this.renderer.addClass(document.documentElement, 'no-scroll');
    }
    else {
      this.renderer.removeClass(document.body, 'no-scroll');
      this.renderer.removeClass(document.documentElement, 'no-scroll');
    }

  }
}
