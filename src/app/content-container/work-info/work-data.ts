import { WorkDataItem } from "src/app/shared/model/work-data-item";

export const workData: WorkDataItem[] = [
    {
        title: 'Sobre mim',
        icon: 'assets/svg-icons/profile-favorite.svg',
        content: `
            <br />
            <span>Olá! Meu nome é <b>Ednaldo</b>, e boas-vindas ao meu site de portfólio.</span>
        `
    },
    {
        title: 'Habilidades',
        icon: 'assets/svg-icons/skill.svg',
        content: `
            <br />
            <span><b>Idiomas</b></span>
            <ul>
                <li>Português (Brasil) - Avançado/Fluente <img src="assets/svg-icons/brazil-flag.svg" /></li>
                <li>Inglês - Avançado/Fluente <img src="assets/svg-icons/usa-flag.svg" /> <img src="assets/svg-icons/uk-flag.svg" /></li>
                <li>Espanhol - Básico</li>
            </ul>
            <br />

            <span><b>Tecnologias e Linguagens de Programação</b></span>
            <ul>
                <li>Angular</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Java 8/11/17</li>
                <li>Spring Framework</li>
                <li>Angular Material</li>
                <li>React</li>
                <li>React Native</li>
                <li>PostgreSQL</li>
            </ul>
            <br />

            <span><b>IDE's e Plataformas</b></span>
            <ul>
                <li>Visual Studio Code</li>
                <li>Eclipse</li>
                <li>Spring Tool Suite</li>
                <li>PGAdmin</li>
                <li>DBeaver</li>
            </ul>
            <br />

            <span><b>Padrões de trabalho e ferramentas de versionamento</b></span>
            <ul>
                <li>Metodologia Ágil (Scrum Master)</li>
                <li>Git (Github, Gitlab, Gitflow, CI)</li>
                <li>Atlassian</li>
                <li>Microsoft Azure DevOps</li>
                <li>Bitbucket</li>
                <li>Jenkins</li>
            </ul>
            <br />
        `
    },
    {
        title: 'Formação',
        icon: 'assets/svg-icons/graduation-hat.svg',
        content: `
            <br />
            <span><b>Ciência da Computação</b> - Bacharelado</span><img src="assets/svg-icons/laptop.svg" />
            <br /><br /><br />
            <span>&emsp;<b>Universidade:</b> Centro Universitário de Brasília <b>(CEUB)</b></span>
            <br /><br />
            <span>&emsp;<b>Período:</b> 1° Semestre 2019 <b>até</b> 1° Semestre 2023 (4 anos e meio)</span>
        `
    },
    {
        title: 'Trajetória',
        icon: 'assets/svg-icons/path.svg',
        content: `
            <br />
            <span><b>Fóton Informática</b> - abril/2023 até atualmente</span>
            <br /><br />

            <span><b>Cresol Confederação</b> - fevereiro/2022 até março/2023</span>
            <br /><br />

            <span><b>MetaReports Telemedicina</b> - abril/2021 até fevereiro/2022</span>
            <br /><br />

            <span><b>Ministério da Infraestrutura</b> (estágio) - maio/2019 até abril/2021</span>
            <br /><br />
        `
    }
];