import { LitElement, html, css } from 'lit-element';

class TodoListItem extends LitElement {
    properties() {
        return {
            todo: Object,
            index: Number,
            checked: Boolean
        }
    }

    static get styles() {
        return css`
        .complete {
            color: green;
        }
        `;
    }

    constructor() {
        super();
        this.todo = {};
        this.index = 0;
        this.checked = false;
    }

    render() {
        return html`
            <div>
                <p class="${this.checked ? 'complete': ''}" @click="${this.toggle}" .checked="${this.checked}">
                    ${this.todo.desc}
                </p>
                <button @click="${this.remove}" delete="${this.index}">
                    Borrar
                </button>
            </div>
        `;
    }

    toggle(event) {
        this.dispatchEvent(new CustomEvent('toogle-checked', {
            detail: {
                index: this.index
            }
        }))
    }

    remove(event) {
        const id = event.currentTarget.getAttribute('delete');
        this.dispatchEvent(new CustomEvent('remove-item', {
            detail: {
                id
            }
        }))
    }
}

window,customElements.define('todo-list-item', TodoListItem)