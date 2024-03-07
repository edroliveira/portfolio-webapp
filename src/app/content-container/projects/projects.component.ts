import { Component } from '@angular/core';
import { Project } from 'src/app/shared/model/project';
import { projectData } from './data/project-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = projectData;

  checkLastItem(index: number) {
    return index !== this.projects.length - 1;
  }

}
