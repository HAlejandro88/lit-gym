import { LitElement, html, css } from 'lit-element';


class FirstTest extends LitElement {
    static get properties() {
        return {
            persons: Array,
            label: String,
            companie: Object,
            phone: Number
        }
    }
    
    constructor() {
        super();
        this.persons = [];
        this.label = '';
        this.companie = {};
        this.phone = 0;
    }
    
    render() {
        return html`
            <h1>Hello World</h1>
        `;
    }
}

window.customElements.define('first-test',FirstTest)
