import { LitElement, html, css } from 'lit-element';

class DashboardPage extends LitElement {
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
            <h1>Dashboard</h1>
        `;
    }
}

window.customElements.define('dashboard-page', DashboardPage);