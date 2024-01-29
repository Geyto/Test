import {Router} from "./router.js";
import '../assets/styles/style.scss';
import'bootstrap'
class App{
    constructor() {
        this.router = new Router();
        window.addEventListener('DOMContentLoaded', this.handleRouteChanging.bind(this));
        window.addEventListener('popstate', this.handleRouteChanging.bind(this));
    }
    handleRouteChanging(){
        this.router.openRoute();
    }
}
(new App());