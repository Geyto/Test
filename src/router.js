import {Laptop} from "./components/laptop";
import {Main} from "./components/main";

export class Router {
    constructor() {
        this.contentElemet = document.getElementById('content');
        this.logoImg = document.getElementById('logo-img');
        if (window.innerWidth < '520'){
            this.logoImg.setAttribute("src","img/small-logo.png")
        }
        this.initRoutes();
    }
    initRoutes() {
        this.routes = [
            {
                route: '',
                title: 'Главная',
                template: 'templates/main.html',
                load: () => {
                    new Main();
                },
            },
            {
                route: '#/laptop',
                title: 'Ноутбуки',
                template: 'templates/laptop.html',
                load: () => {
                    new Laptop()
                },
            },
        ]
    }

    async openRoute() {
        const urlRoute = window.location.hash.split('?')[0];
        this.createContentPage(urlRoute);
    }
    async createContentPage(urlRoute){
        const newRoute = this.routes.find(item => {
            return item.route === urlRoute
        });

        try {
            const result = await fetch(newRoute.template).then(response => response.text());
            if (result) {
                this.contentElemet.innerHTML = result
            }

        } catch (error) {
            return console.log(error);
        }
        newRoute.load();
    }

}