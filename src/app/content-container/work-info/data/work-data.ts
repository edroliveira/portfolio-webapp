import { WorkDataItem } from "src/app/shared/model/work-data-item";

export const workData: WorkDataItem[] = [
    {
        title: 'Sobre mim',
        icon: 'assets/svg-icons/profile-favorite.svg',
        content: `
            <br />
            <span>Olá! Meu nome é <strong>Ednaldo</strong>, e boas-vindas ao meu site de portfólio.</span>
        `
    },
    {
        title: 'Habilidades',
        icon: 'assets/svg-icons/skill.svg',
        content: `
            <br />
            <span><strong>Idiomas</strong></span>
            <ul>
                <li>Português (Brasil) - Nativo <img src="assets/svg-icons/brazil-flag.svg" /></li>
                <li>Inglês - Avançado/Fluente <img src="assets/svg-icons/usa-flag.svg" /> <img src="assets/svg-icons/uk-flag.svg" /></li>
                <li>Espanhol - Básico</li>
            </ul>
            <br />

            <span><strong>Tecnologias e Linguagens de Programação</strong></span>
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

            <span><strong>IDE's e Plataformas</strong></span>
            <ul>
                <li>Visual Studio Code</li>
                <li>Eclipse</li>
                <li>Spring Tool Suite</li>
                <li>PGAdmin</li>
                <li>DBeaver</li>
            </ul>
            <br />

            <span><strong>Padrões de trabalho e ferramentas de versionamento</strong></span>
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
            <span><strong>Ciência da Computação</strong> - Bacharelado</span><img src="assets/svg-icons/laptop.svg" />
            <br /><br /><br />
            <span>&emsp;<strong>Universidade:</strong> Centro Universitário de Brasília <strong>(CEUB)</strong></span>
            <br /><br />
            <span>&emsp;<strong>Período:</strong> 1° Semestre 2019 <strong>até</strong> 1° Semestre 2023 (4 anos e meio)</span>
        `
    },
    {
        title: 'Trajetória',
        icon: 'assets/svg-icons/path.svg',
        content: `
            <br />
            <span><strong>Fóton Informática</strong> - abril/2023 até o momento</span>
            <br /><br />

            <span><strong>Cresol Confederação</strong> - fevereiro/2022 até março/2023</span>
            <br /><br />

            <span><strong>MetaReports Telemedicina</strong> - abril/2021 até fevereiro/2022</span>
            <br /><br />

            <span><strong>Ministério da Infraestrutura</strong> (estágio) - maio/2019 até abril/2021</span>
            <br /><br />
        `
    }
];