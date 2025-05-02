 
const objDog = {
    description:{
        esp:"Crie una web que consume datos de una API externa y los complementa con registros personalizados.\n  Usé React.js con Redux para gestión de estado, paginación dinámica y filtros avanzados. Css puro con diseño responsive. Backend en NodeJs y Express con Postgre. La solución ofrece CRUD completo, permitiendo consultas, creación e edición de registros",
        por:"Desenvolvi um site que consome dados de uma API externa e complementa com registros personalizados.\n Utilizei React.js com Redux para gerenciamento de estado, paginação dinâmica e filtros avançados. CSS puro com design responsivo. Backend em NodeJs e Express com Postgre. A solução oferece CRUD completo, permitindo consultas, criação e edição registros.",
    },
    title: 'MY DOG APP', 
    subTitle:'WEB APP',
    goSite:'https://mydog-app.web.app/',
    tools:["Html","JavaScript","NodeJS","Css","ReactJS","Redux","Postgress","Sequelize"],
};
const objWine = {
    description: {
     esp:"Desarrollé un e-commerce de vinos con catálogo dinámico, carrito de compras y panel administrativo. Usé React con Redux para el manejo del estado global, filtros avanzados, búsqueda instantánea y persistencia del carrito. La interfaz responsiva se implementó con CSS Modules y Bootstrap.Para el backend utilicé Node.js y Express, conectado a una base de datos Postgre para almacenar productos, usuarios, pedidos y reseñas. Implementé rutas protegidas para administradores con CRUD completo e integración con Mercado Pago para los pagos.",
     por:"Desenvolvi um e-commerce de vinhos, com catálogo dinâmico, carrinho de compras e dashboard administrativo. Utilizei React.js com Redux para gerenciamento de estado global, filtros avançados, busca instantânea e persistência do carrinho. A interface responsiva com CSS Modules e Bootstrap. No backend Node.js e Express, conectada a um banco de dados Postgre para armazenar produtos, usuários, pedidos e avaliações. Implementei rotas protegidas para administradores com CRUD completo e integração com Mercado Pago para pagamentos.",
    },
    goSite:"https://pf-vinos-ecommerce.vercel.app/",
    title: 'WINE APP',
    subTitle:'WEB APP',
    tools:["Html","JavaScript","NodeJS","Css","ReactJS","Redux","Postgress","Sequelize"],
};
const objSaturno = {
    description : {
        esp:"Saturno Mobile App aplicación de gestión de turnos médicos. Actué como desarrollador frontend utilizando React Native y Expo. Diseñé toda la identidad visual de la aplicación creando componentes reutilizables. Trabajé en la integración con APIs para mostrar y actualizar los agendamientos médicos en tiempo real.",
        por:"Saturno Mobile App aplicação de gestão de turnos médicos. Atuei como desenvolvedor frontend utilizando React Native e Expo. Desenhei toda a identidade visual da aplicação criando componentes reutilizáveis.Trabalhei na integração com APIs para exibir e atualizar os agendamentos médicos em tempo real.",
    },
    goSite:"https://gitlab.com/dev-salud/turnosapp",
    title:"SATURNO APP",
    subTitle:'MOBILE APP',
    tools:["JavaScript","NodeJS","React Native","Expo","Css"],
};

const objMyPortfolio = {
    description:{
        esp:"Desarrollé mi sitio web personal como vitrina de mis habilidades, utilizando React como base, GSAP para animaciones avanzadas y personalizadas, y CSS puro para un diseño responsivo. Implementé React Context para gestionar estados globales como el cambio de idiomas. Presenté todas las herramientas que conozco y puedo ofrecer.",
        por:"Desenvolvi meu site pessoal como vitrine das minhas habilidades, utilizando React como base, GSAP para animações avançadas e personalizadas e CSS puro para um design responsivo. Implementei React Context para gerenciar estados globais como a troca de idiomas.Apresentei todas as ferramentas que conheço e posso oferecer." 
    },
    goSite: "https://juan-drouville.web.app/",
    title:'MY PORTFOLIO',
    subTitle:'WEB APP',
    tools:["JavaScript","NodeJS","ReactJS","Css"],
};

export const proyects = [objDog,objWine,objSaturno,objMyPortfolio];