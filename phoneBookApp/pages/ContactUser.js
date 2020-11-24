import { LitElement, html, css } from 'lit-element';

class ContactUser extends LitElement {
    static get properties() {
        return {
            user: String
        }
    }

    static get styles() {
        return css``;
    }

    constructor() {
        super();
        this.user = ''
    }

    render() {
        return html`
            <h1>Contact User ${this.user}</h1>
        `;
    }
}

window.customElements.define('contact-user', ContactUser);