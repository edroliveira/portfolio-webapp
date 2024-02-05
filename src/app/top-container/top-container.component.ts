import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScreenComponentEnum } from '../shared/model/enum/screen-component.enum';
import { ScreenOption } from '../shared/model/screen-option';
import { Select, Store } from '@ngxs/store';
import { SetScreenComponent } from '../shared/action/screen-component-action';
import { ScreenComponentSelectors } from '../shared/selector/screen-component-selector';
import { Observable } from 'rxjs';

interface ISocialInfo {
  url: string,
  imgSrc: string,
  description: string,
  className: string,
  tooltip: string
}

@Component({
  selector: 'app-top-container',
  templateUrl: './top-container.component.html',
  styleUrls: ['./top-container.component.scss']
})
export class TopContainerComponent implements OnInit {

  @Select(ScreenComponentSelectors.component)
  screenComponent$!: Observable<ScreenComponentEnum>;

  socialInfoOptions: ISocialInfo[] = [
    {
      url: 'https://www.linkedin.com/in/ednaldo-romer-de-oliveira-j%C3%BAnior-5b98331b7/',
      imgSrc: 'assets/svg-icons/linkedin.svg',
      description: 'LinkedIn Icon',
      className: 'linkedin',
      tooltip: 'LinkedIn'
    },
    {
      url: 'https://github.com/edroliveira',
      imgSrc: 'assets/svg-icons/github.svg',
      description: 'GitHub Icon',
      className: 'github',
      tooltip: 'GitHub Repository'
    },
    {
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=ednaldojunior2001@gmail.com',
      imgSrc: 'assets/svg-icons/gmail.svg',
      description: 'Gmail Icon',
      className: 'gmail',
      tooltip: 'Gmail'
    }
  ];

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

  ngOnInit(): void {
    
  }

  openSelectedComponent(option: ScreenOption) {
    this.store.dispatch(new SetScreenComponent(option));
  }

}
