const coresTecnologias = {
    javacript: "text-[#f7df1e] bg-[#f7df1e1A]",
    html: "text-[#e44d26] bg-[#e44d261A]", 
    css: "text-[#264de4] bg-[#264de41A]",
    react: "text-[#3cbcfc] bg-[#3cbcfc1A]",
    vueJs: "text-[#42B883] bg-[#42B8831A]", 
    tailwindcss: "text-[#3cbcfc] bg-[#3cbcfc1A]",
    supabase: "text-[#42B883] bg-[#42B8831A]",
    scss: "text-[#cf649a] bg-[#cf649a1A]"
}

export const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Formação", href: "#formacao" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contatos", href: "#contatos" },
]

export const formacao = [
    { curso: "Curso de Inglês - Certificação C1/C2 ", inicio: "04/2021", conclusao: "03/2024", instituicao: "Hugle Education" },
    { curso: "Técnico em Desenvolvimento de Sistemas", inicio: "01/2021", conclusao: "12/2023", instituicao: "ETEC Ilza Nascimento Pintus" },
    { curso: "Análise e Desenvolvimento de Sistemas", inicio: "01/2024", conclusao: "12/2025", instituicao: "UNIP - Universidade Paulista" },
]

export const experienciaProfissional = [
    { funcao: "Técnico de Informatica", empresa: "IF Informatica", periodo: "06/2024 - Até o momento...", experiencia: "Manutenção de computadores e impressoras. Tive a oportunidade de fazer modificações no site da loja para melhorar a experiência do cliente e o fluxo de usuários, além de desenvolver uma aplicação para auxiliar no atendimento aos clientes.", tecnologias: [
        { nome: "JavaScript", cor: coresTecnologias.javacript},
        { nome: "HTML", cor: coresTecnologias.html},
        { nome: "CSS", cor: coresTecnologias.css},
    ]},
    { funcao: "Freelancer", empresa: "Freelancer", periodo: "01/2024 - 06/2024", experiencia: "Criação de landing pages e designs.", tecnologias: [
        { nome: "JavaScript", cor: coresTecnologias.javacript},
        { nome: "HTML", cor: coresTecnologias.html},
        { nome: "CSS", cor: coresTecnologias.css},
        { nome: "Tailwindcss", cor: coresTecnologias.tailwindcss },
        { nome: "VueJS", cor: coresTecnologias.vueJs },
        { nome: "React", cor: coresTecnologias.react},
        { nome: "SCSS", cor: coresTecnologias.scss},
        
    ]}
]

export const projetos = [
    { titulo: "GitHub Repositories Wiki", imageURL: "https://i.imgur.com/mNkF0zB.png", descricao: "Aplicação que utiliza API do github para procurar repositórios por meio da URL.", urlGitHub: "https://github.com/MuriloCSilva/github-repositories-wiki", tags: [
        { tagName: "React", cor: coresTecnologias.react },
        { tagName: "Tailwindcss", cor: coresTecnologias.tailwindcss },
        ]
    },
    { titulo: "Nike Landing Page", imageURL: "https://i.imgur.com/7x3xF8Z.png", descricao: "Landing Page feito com ReactJS e tailwindcss", urlGitHub: "https://github.com/MuriloCSilva/Nike-Landing-Page", tags: [
        { tagName: "React", cor: coresTecnologias.react },
        { tagName: "Tailwindcss", cor: coresTecnologias.tailwindcss },
        ]
    },
    { titulo: "Lify", imageURL: "https://i.imgur.com/r26ETCL.png", descricao: "Trabalho de Conclusão de Curso, no qual obtive nota máxima.", urlGitHub: "https://github.com/MuriloCSilva/TCC-Lify", tags: [
        { tagName: "Nuxt", cor: coresTecnologias.vueJs },
        { tagName: "Supabase", cor: coresTecnologias.vueJs },
        { tagName: "SCSS", cor: coresTecnologias.scss },
        ]
    },
    { titulo: "React Calculator", imageURL: "https://i.imgur.com/ekbcPSv.png", descricao: "CAlculator made with React and Tailwindcss", urlGitHub: "https://github.com/MuriloCSilva/calculadora-react", tags: [
        { tagName: "React", cor: coresTecnologias.react },
        { tagName: "Tailwindcss", cor: coresTecnologias.tailwindcss },
        ]
    },
]