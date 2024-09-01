import { Component, OnInit, Output } from '@angular/core';
import { ScreenComponentEnum } from '../shared/model/enum/screen-component.enum';
import { ScreenOption } from '../shared/model/screen-option';
import { Select, Store } from '@ngxs/store';
import { SetScreenComponent } from '../shared/action/screen-component-action';
import { ScreenComponentSelectors } from '../shared/selector/screen-component-selector';
import { Observable } from 'rxjs';
import { socialInfo } from './social-info-data';

@Component({
  selector: 'app-top-container',
  templateUrl: './top-container.component.html',
  styleUrls: ['./top-container.component.scss']
})
export class TopContainerComponent {

  @Select(ScreenComponentSelectors.component)
  screenComponent$!: Observable<ScreenComponentEnum>;

  @Output() 

  socialInfoOptions = socialInfo;

  selectionOptions: ScreenOption[] = [
    {
      displayText: 'SOBRE MEU TRABALHO',
      screenComponent: ScreenComponentEnum.WORK_INFO
    },
    {
      displayText: 'ACESSE MEUS PROJETOS',
      screenComponent: ScreenComponentEnum.PROJECTS
    }
  ];

  constructor(
    private store: Store
  ) { }

  openSelectedComponent(option: ScreenOption) {
    this.store.dispatch(new SetScreenComponent(option));
  }

}
