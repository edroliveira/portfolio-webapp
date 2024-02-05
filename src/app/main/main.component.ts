import { Component } from '@angular/core';
import { ScreenComponentEnum } from '../shared/model/enum/screen-component.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  selectedScreenComponent: ScreenComponentEnum = ScreenComponentEnum.WORK_INFO;

}
