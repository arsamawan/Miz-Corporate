import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public check: any;
  private wasInside = false;

  constructor() { }

  ngOnInit() {
  }
  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }
  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.check = false;
    }
    this.wasInside = false;
  }
  closeSide() {
    const check = document.getElementById("check");
    check.click();
  }
}
