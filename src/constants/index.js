const coresTecnologias = {
    javascript: "text-[#f7df1e] bg-[#f7df1e1A]",
    html: "text-[#e44d26] bg-[#e44d261A]", 
    css: "text-[#264de4] bg-[#264de41A]",
    react: "text-[#3cbcfc] bg-[#3cbcfc1A]",
    vueJs: "text-[#42B883] bg-[#42B8831A]", 
    tailwindcss: "text-[#3cbcfc] bg-[#3cbcfc1A]",
    supabase: "text-[#42B883] bg-[#42B8831A]",
    scss: "text-[#cf649a] bg-[#cf649a1A]",
    php: "text-[#336699] bg-[#3366991A]",
    mysql: "text-[#F29111] bg-[#F291111A]",
}

export const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Education", href: "#formacao" },
    { label: "Experience", href: "#experiencia" },
    { label: "Projects", href: "#projetos" },
    { label: "Contacts", href: "#contatos" },
]

export const formacao = [
    { curso: "English Course - C1/C2 Certification", inicio: "04/2021", conclusao: "03/2024", instituicao: "Hugle Education" },
    { curso: "System Development", inicio: "01/2021", conclusao: "12/2023", instituicao: "ETEC Ilza Nascimento Pintus" },
    { curso: "Systems Analysis and Development", inicio: "01/2024", conclusao: "12/2025", instituicao: "UNIP - Universidade Paulista" },
]

export const experienciaProfissional = [
    { funcao: "Development Intern", empresa: "dbsnoop", periodo: "02/2025 - Present", experiencia: "REST API and events development and maintenance using PHP and MySQL 5.7", tecnologias: [
        { nome: "PHP", cor: coresTecnologias.php},
        { nome: "VueJS", cor: coresTecnologias.vueJs},
        { nome: "CSS", cor: coresTecnologias.css},
        { nome: "MySQL", cor: coresTecnologias.mysql},
    ]},
    { funcao: "IT Technician", empresa: "IF Informatica", periodo: "06/2024 - 12/2024", experiencia: "Computer and printer maintenance. I had the opportunity to enhance the store's website to improve user experience and flow.", tecnologias: [
        { nome: "JavaScript", cor: coresTecnologias.javascript},
        { nome: "HTML", cor: coresTecnologias.html},
        { nome: "CSS", cor: coresTecnologias.css},
    ]},
    { funcao: "Freelancer", empresa: "Freelancer", periodo: "01/2024 - 06/2024", experiencia: "Created landing pages and UI designs.", tecnologias: [
        { nome: "JavaScript", cor: coresTecnologias.javascript},
        { nome: "HTML", cor: coresTecnologias.html},
        { nome: "CSS", cor: coresTecnologias.css},
        { nome: "Tailwindcss", cor: coresTecnologias.tailwindcss },
        { nome: "VueJS", cor: coresTecnologias.vueJs },
        { nome: "React", cor: coresTecnologias.react},
        { nome: "SCSS", cor: coresTecnologias.scss},
        
    ]}
]

export const projetos = [
    { titulo: "GitHub Repositories Wiki", imageURL: "https://i.imgur.com/mNkF0zB.png", descricao: "Application that uses the GitHub API.", urlGitHub: "https://github.com/MuriloCSilva/github-repositories-wiki", tags: [
        { tagName: "React", cor: coresTecnologias.react },
        { tagName: "Tailwindcss", cor: coresTecnologias.tailwindcss },
        ]
    },
    { titulo: "Nike Landing Page", imageURL: "https://i.imgur.com/7x3xF8Z.png", descricao: "Landing page built with ReactJs and Tailwindcss", urlGitHub: "https://github.com/MuriloCSilva/Nike-Landing-Page", tags: [
        { tagName: "React", cor: coresTecnologias.react },
        { tagName: "Tailwindcss", cor: coresTecnologias.tailwindcss },
        ]
    },
    { titulo: "Lify", imageURL: "https://i.imgur.com/r26ETCL.png", descricao: "Final Thesis Project, in which I achieved the highest grade.", urlGitHub: "https://github.com/MuriloCSilva/TCC-Lify", tags: [
        { tagName: "Nuxt", cor: coresTecnologias.vueJs },
        { tagName: "Supabase", cor: coresTecnologias.vueJs },
        { tagName: "SCSS", cor: coresTecnologias.scss },
        ]
    },
    { titulo: "React Calculator", imageURL: "https://i.imgur.com/ekbcPSv.png", descricao: "Calculator built with React and Tailwindcss", urlGitHub: "https://github.com/MuriloCSilva/calculadora-react", tags: [
        { tagName: "React", cor: coresTecnologias.react },
        { tagName: "Tailwindcss", cor: coresTecnologias.tailwindcss },
        ]
    },
]