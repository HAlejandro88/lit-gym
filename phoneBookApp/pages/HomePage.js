import { LitElement, html, css } from 'lit-element';

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
            <h1>Home Page</h1>
            <p>
                bienveniodos a home page
            </p>
        `;
    }
}

window.customElements.define('home-page', HomePage);