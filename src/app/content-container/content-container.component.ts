import { Component } from '@angular/core';
import { ScreenComponentEnum } from '../shared/model/enum/screen-component.enum';
import { Select } from '@ngxs/store';
import { ScreenComponentSelectors } from '../shared/selector/screen-component-selector';
import { Observable } from 'rxjs';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
  animations: [
    fadeInOnEnterAnimation()
  ]
})
export class ContentContainerComponent {

  @Select(ScreenComponentSelectors.component)
  screenComponent$!: Observable<ScreenComponentEnum>;

}
