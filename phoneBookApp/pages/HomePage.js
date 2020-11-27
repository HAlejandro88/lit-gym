import { LitElement, html, css } from 'lit-element';
import '../components/AddContact';
class HomePage extends LitElement {
    static get properties() {
        return {}
    }

    static get styles() {
        return css``;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <add-contact @add-contact="${this.addContact}"></add-contact>
        `;
    }


}

window.customElements.define('home-page', HomePage);