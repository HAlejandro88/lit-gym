import { LitElement, html, css } from 'lit-element';


class FirstTest extends LitElement {
    static get properties() {
        return {
            persons: Array,
            label: String,
            companie: Object,
            phone: Number,
            count: Number
        }
    }
    
    constructor() {
        super();
        this.persons = [];
        this.label = '';
        this.companie = {};
        this.phone = 0;
        this.count = 0;
    }

    increment() {
        this.count ++;
    }


    render() {
        return html`
            <h1>Hello World</h1>
            <h6> el contador es ${this.count}</h6>
            <button @click="${this.increment}">click</button>
        `;
    }


}

window.customElements.define('first-test',FirstTest)
