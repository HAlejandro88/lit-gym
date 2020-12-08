import { LitElement,html } from 'lit-element';
import './components/SideMenu';
import './components/ContentArea';

class BookApp extends LitElement {
    static get properties() {
        return {}
    }

    constructor() {
        super();
        this.user = ['hola'];
        console.log(this.user);
    }
// TOD0: ver como funciona el debbuger;
    render() {
        return html`
            <div class="main-page">
                <side-menu></side-menu>
                <content-area></content-area>
            </div>
        `;
    }
}


window.customElements.define('book-app', BookApp);
