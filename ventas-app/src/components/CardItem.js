import { LitElement, html, css } from 'lit-element';

class CardItem extends LitElement {
    static get properties() {
        return {
            descripcion: String,
            idLista: String,
            direccion: String,
            img: String,
            status: Boolean
        }
    }

    static get styles() {
        return css`...`
    }


    constructor() {
        super();
    }

    render() {
        return html`
            <div>
                <div class="header">

                </div>
                <div class="body"></div>
                <button>Editar</button>
                <button>Compartir</button>
            </div>
        `;
    }

}

window.customElements.define('card-item', CardItem)