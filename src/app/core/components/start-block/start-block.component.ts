import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'evoband-start-block',
  templateUrl: './start-block.component.html',
  styleUrls: ['./start-block.component.scss']
})
export class StartBlockComponent implements OnInit {
  private scrollLength = 0;

  @HostListener('window:scroll', [])
  private onWindowScroll(): void {
    this.scrollLength = -window.pageYOffset;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public getTransform(change: number): string {
    return `translate3d(${change * this.scrollLength}px, ${change * 0.4 * this.scrollLength}px, 0px)`;
  }

}
