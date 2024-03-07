import { ProjectTypeEnum } from "./enum/project-type.enum";

export class Project {
    constructor(
        public name: string,
        public icon: string,
        public type: ProjectTypeEnum
    ) { }
}