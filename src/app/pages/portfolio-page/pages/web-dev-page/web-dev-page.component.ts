import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-dev-page',
  templateUrl: './web-dev-page.component.html',
  styleUrls: ['./web-dev-page.component.scss']
})
export class WebDevPageComponent implements OnInit {
  showRickInfo= false;
  constructor() { }

  ngOnInit(): void {
  }
  showRick(){
    console.log(this.showRickInfo)
    this.showRickInfo = true
  }
  hideRick(){
    console.log(this.showRickInfo)
    this.showRickInfo = false
  }
}

