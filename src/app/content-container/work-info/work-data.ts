import { WorkDataItem } from "src/app/shared/model/work-data-item";

export const workData: WorkDataItem[] = [
    {
        title: 'Sobre mim',
        icon: 'assets/svg-icons/profile-favorite.svg',
        content: `
            Teste quebra de parágrafo \n
            Segunda linha
        `
    },
    {
        title: 'Habilidades',
        icon: 'assets/svg-icons/skill.svg',
        content: ''
    },
    {
        title: 'Trajetória',
        icon: 'assets/svg-icons/path.svg',
        content: ''
    }
];