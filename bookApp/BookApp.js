import { LitElement,html } from 'lit-element';
import './components/SideMenu';
import './components/ContentArea';

class BookApp extends LitElement {
    static get properties() {
        return {
            pages: Array
        }
    }

    constructor() {
        super();
        this.pages = [
            { name: 'Contact', href: '/contacts' },
            { name: 'Contact List', href: '/list' },
            { name: 'home', href: '/home' },
        ];
    }


    render() {
        return html`
                <h2>hola</h2>
            <div class="main-page">
                <side-menu .options="${this.pages}" ></side-menu>
            </div>
        `;
    }
}


window.customElements.define('book-app', BookApp);
