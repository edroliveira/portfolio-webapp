import { ProjectTypeEnum } from "src/app/shared/model/enum/project-type.enum";
import { Project } from "src/app/shared/model/project";

export const projectData: Project[] = [
    {
        name: 'Potfolio WebApp',
        icon: '',
        type: ProjectTypeEnum.PERSONAL
    },
    {
        name: 'Veterano Amigo',
        icon: '',
        type: ProjectTypeEnum.PERSONAL
    },
    {
        name: 'Timeless',
        icon: '',
        type: ProjectTypeEnum.FREELANCE
    },
    {
        name: 'Meta Médico',
        icon: '',
        type: ProjectTypeEnum.CONTRACT
    },
];