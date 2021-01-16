import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  popoverIsVisible = false;
  constructor() { }

  ngOnInit(): void {
   
  }
  showPopover(){
    console.log(this.popoverIsVisible);
    this.popoverIsVisible = true
  }
  hidePopover(){
    console.log(this.popoverIsVisible);
    this.popoverIsVisible = false
  }

}
