import { LitElement, html, css } from 'lit-element';

class ContactList extends LitElement {
    static get properties() {
        return {
            contacts: Array
        }
    }

    constructor() {
        super();
        this.contacts = [];
    }

    render() {
        return html `
                <h3>hooolaa</h3>
            <header>
                <h1>Contactos</h1>
                <input type="text" placeholder="buscar">
                <div>
                    <img src="" alt=""/>
                    <h4>Alejandro</h4>
                </div>
            </header>
            <main>
                <ul>
                    <li>alex</li>
                    <li>diego</li>
                    <li>carina</li>
                </ul>
            </main>
        `;
    }
}

window.customElements.define('contact-list', ContactList);
