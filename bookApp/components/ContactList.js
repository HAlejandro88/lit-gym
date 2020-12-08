import { LitElement, html, css } from 'lit-element';

class ContactList extends LitElement {
    static get properties() {
        return {}
    }

    constructor() {
        super();
    }
}

window.customElements.define('contact-list', ContactList);
