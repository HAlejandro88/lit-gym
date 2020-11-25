import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle';
import '@vaadin/vaadin-icons';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@vaadin/vaadin-tabs/vaadin-tabs';
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