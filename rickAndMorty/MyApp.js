import { LitElement, html, css } from 'lit-element';
import './components/CharacterList';
import './components/CharacterDetail';

class MyApp extends LitElement {
    static get properties() {
        return {}
    }

    async firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        await this.__request();

    }

    render() {
        return html`
            <character-list></character-list>
            <character-detail></character-detail>
        `;
    }

    async __request() {
        const characterList = this.shadowRoot.querySelector('character-list');
        const characterDetail = this.shadowRoot.querySelector('character-detail');
        characterList.addEventListener('selected-character', e => characterDetail.character = e.detail);
        const response =  await(await fetch('https://rickandmortyapi.com/api/character')).json();
        characterList.characters = response.results;
        characterDetail.character = response.results[0];
    }
}

window.customElements.define('my-app', MyApp);
