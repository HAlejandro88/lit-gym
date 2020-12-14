import { LitElement, html, css } from 'lit-element';


class CharacterDetail extends LitElement {
    static get properties() {
        return {
            character: Object
        }
    }


    constructor() {
        super();
        this.character = {}
    }

    render() {
        return html`
            <h2>${this.character.name}</h2>
            <ul>
                <li>status: ${this.character.status}</li>
                <li>species: ${this.character.species}</li>
                <li>gender: ${this.character.gender}</li>
            </ul>
        `;
    }
}

window.customElements.define('character-detail', CharacterDetail);
