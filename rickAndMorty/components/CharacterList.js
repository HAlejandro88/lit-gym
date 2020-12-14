import { LitElement, html, css } from 'lit-element';


class CharacterList extends LitElement {
    static get properties() {
        return {
            characters: Array
        }
    }

    static get styles() {
        return css``;
    }

    constructor() {
        super();
        this.characters = [];
        this.characterListElement = this.shadowRoot.querySelector('section');
    }


    render() {
        return html`
            <section>
                ${this.characters.map(character => html`
                        <button @click="${this.handleClick}" .charcterModel="${character}">${character.name}</button>
                `)}
            </section>
        `;
    }
    handleClick(event) {
        console.log('click')
        const character = event.currentTarget.charcterModel;
        console.log(character, 'undefine');
        this.dispatchEvent(new CustomEvent('select-chalacter', {
            detail: character
        }))
    }
}

window.customElements.define('character-list', CharacterList);
