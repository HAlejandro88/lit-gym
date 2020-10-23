import { LitElement, html, css } from 'lit-element';

class TodoListItem extends LitElement {
    properties() {
        return {
            desc: String,
            id: String,
            checked: Boolean
        }
    }

    static get styles() {
        return css`
        .complete {
            color: green;
            border: 1px solid red;
        }
        .normal {
            color: blue;
        }
        `;
    }

    constructor() {
        super();
        this.desc = '';
        this.id = '';
        this.checked = false;
    }

    render() {
        return html`
            <div>
                <p class="${this.checked ? 'complete' : 'normal'}" .checked="${this.checked}" @click="${this.toogle}" itemChecked="${this.id}">
                    ${this.desc}
                </p>
                <button @click="${this.remove}" itemRemove="${this.id}">Remover</button>
            </div>
        `;
    }

    remove(e) {
        const id = e.currentTarget.getAttribute('itemRemove');
        console.log(id);
        this.dispatchEvent(new CustomEvent('remove-item', {
            detail: id
        }))
    }

    toogle(e) {
        const id = e.currentTarget.getAttribute('itemChecked');
        this.dispatchEvent(new CustomEvent('checked-item', {
            bubbles: true,
            composed: true,
            detail: id
        }))
    }

}

window,customElements.define('todo-list-item', TodoListItem)