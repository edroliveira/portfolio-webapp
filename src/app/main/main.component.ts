import { Component } from '@angular/core';
import { ScreenComponentEnum } from '../shared/model/enum/screen-component.enum';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ScrollToSelector } from '../shared/selector/scroll-selector';
import { SetScrollTo } from '../shared/action/scroll-action';
import { ScrollingData } from '../shared/model/scrolling-data';
import { ScrollingPositionEnum } from '../shared/model/enum/scrolling-position.enum';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Select(ScrollToSelector.position)
  scrolling$!: Observable<ScrollingPositionEnum>;

  selectedScreenComponent: ScreenComponentEnum = ScreenComponentEnum.WORK_INFO;
  positionTop: ScrollingPositionEnum = ScrollingPositionEnum.TOP;
  positionBottom: ScrollingPositionEnum = ScrollingPositionEnum.BOTTOM;

  // Styling options
  isMobileView: boolean = false;

  constructor(
    private store: Store,
    private responsive: BreakpointObserver
  ) {
    this.responsive
      .observe([
        Breakpoints.XSmall,
        Breakpoints.HandsetPortrait,
        Breakpoints.TabletPortrait,
        Breakpoints.WebPortrait,
      ])
      .subscribe((result) => {
        this.isMobileView = result.matches;
      });
  }

  scrollTo(el: HTMLElement, position: ScrollingPositionEnum) {
    this.store.dispatch(new SetScrollTo(new ScrollingData(el, position)));
  }
}
