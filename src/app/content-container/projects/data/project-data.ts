import { ProjectTypeEnum } from "src/app/shared/model/enum/project-type.enum";
import { Project } from "src/app/shared/model/project";

export const projectData: Project[] = [
    {
        name: 'Potfolio WebApp',
        icon: '',
        type: ProjectTypeEnum.PERSONAL,
        content: `
            <br />
            <span><strong>Potfolio WebApp</strong></span>
            <br />
            <br />
            <span> Este é um dos projetos mais recentes do meu portfólio. E, como o nome indica, ele se refere ao projeto desta página. </span>
            <br />
            <span> As tecnologias que utilizei são: </span>
            <ul>
                <li> Angular 16 </li>
                <li> Angular Material </li>
                <li> NGXS </li>
                <li> Git Hub </li>
            </ul>
            <br />
            <span> O objetivo principal é demonstrar minhas habilidades técnicas de forma interativa, dinâmica e divertida. Utilizei algumas das minhas bibliotecas favoritas de desenvolvimento frontend neste projeto. </span>
            <br />
            <span> Além disso, este projeto contém informações da minha carreira, meu perfil, contato, repositórios e experiência. </span>
        `
    },
    {
        name: 'Veterano Amigo',
        icon: '',
        type: ProjectTypeEnum.PERSONAL,
        content: `
            <br />
            <span><strong> Veterano Amigo </strong></span>
            <br />
            <br />
            <span> Este é um dos projetos mais recentes do meu portfólio. E, como o nome indica, ele se refere ao projeto desta página. </span>
            <br />
            <span> As tecnologias que utilizei são: </span>
            <ul>
                <li> React Native + Expo Go </li>
                <li> Angular Material </li>
                <li> NGXS </li>
                <li> Git Hub </li>
            </ul>
            <br />
            <span> O objetivo principal é demonstrar minhas habilidades técnicas de forma interativa, dinâmica e divertida. Utilizei algumas das minhas bibliotecas favoritas de desenvolvimento frontend neste projeto. </span>
            <br />
            <span> Além disso, este projeto contém informações da minha carreira, meu perfil, contato, repositórios e experiência. </span>
        `
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