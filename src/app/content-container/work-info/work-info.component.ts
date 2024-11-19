import { Component, Input, OnInit } from '@angular/core';
import { WorkDataItem } from 'src/app/shared/model/work-data-item';
import { workData } from './data/work-data';
import { TechBrand } from 'src/app/shared/model/tech-brand';
import { techData } from './data/tech-data';
import { Store } from '@ngxs/store';
import { SetScreenComponent } from 'src/app/shared/action/screen-component-action';
import { ScreenComponentEnum } from 'src/app/shared/model/enum/screen-component.enum';


@Component({
  selector: 'app-work-info',
  templateUrl: './work-info.component.html',
  styleUrls: ['./work-info.component.scss']
})
export class WorkInfoComponent implements OnInit {

  @Input() isMobileView!: boolean;

  birthdate = new Date('2001-07-03T00:00');
  age!: number;
  workInfo: WorkDataItem[] = workData;
  techBrands: TechBrand[] = techData;
  isAutoExpandDisabled: boolean = false;

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getAge();
  }

  getAge() {
    let timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    this.age = age;
  }

  isExpandedOnInit(workItem: WorkDataItem, index: number): boolean {
    return (!this.isAutoExpandDisabled && index === 0);
  }

  disableAutoExpansion() {
    this.isAutoExpandDisabled = true;
  }

  openProjectsComponent() {
    this.store.dispatch(
      new SetScreenComponent({
        displayText: 'ACESSE MEUS PROJETOS',
        screenComponent: ScreenComponentEnum.PROJECTS,
      })
    );
  }

}
