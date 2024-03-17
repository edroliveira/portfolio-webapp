import { ProjectTypeEnum } from "src/app/shared/model/enum/project-type.enum";
import { Project } from "src/app/shared/model/project";

export const projectData: Project[] = [
    {
        name: 'Potfolio WebApp',
        icon: '',
        type: ProjectTypeEnum.PERSONAL,
        content: 'Potfolio WebApp'
    },
    {
        name: 'Veterano Amigo',
        icon: '',
        type: ProjectTypeEnum.PERSONAL,
        content: 'Veterano Amigo'
    },
    {
        name: 'Timeless',
        icon: '',
        type: ProjectTypeEnum.FREELANCE,
        content: 'Timeless'
    },
    {
        name: 'Meta Médico',
        icon: '',
        type: ProjectTypeEnum.CONTRACT,
        content: 'Meta Médico'
    },
];