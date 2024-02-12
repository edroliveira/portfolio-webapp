import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('topElementRef') topElementRef!: ElementRef;

  title = 'portfolio-webapp';

  showTopEl() {
    console.log(this.topElementRef);
  }

}
