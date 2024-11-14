import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/model/project';
import { projectData } from './data/project-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input() isMobileView!: boolean;

  projects: Project[] = projectData;
  selectedProject!: Project;

  ngOnInit(): void {
    this.selectedProject = this.projects[0];
  }

  setProject(project: Project) {
    this.selectedProject = project;
  }

  checkLastItem(index: number) {
    return index !== this.projects.length - 1;
  }

}
