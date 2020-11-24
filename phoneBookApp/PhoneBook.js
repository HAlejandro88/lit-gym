import { LitElement,html,css } from 'lit-element';
import './components/MyApp';

class PhoneBook extends LitElement {
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
            <my-app></my-app>
        `;
    }
}

window.customElements.define('phone-book', PhoneBook)