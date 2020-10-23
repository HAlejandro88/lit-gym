import { LitElement, html, css } from 'lit-element';

class TodoListItem extends LitElement {
    static get properties() {
        return {
           todo: Object,
           index: Number
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
        this.todo = {
            checked: false,
            desc: '',
            id: ''
        };
        this.index = 0;
    }

    render() {
        return html`
            <div>
                <input type="checkbox"  ?checked="${this.todo.checked}" @click="${this.toogle}"/>
                <p class="${this.todo.checked ? 'complete': ''}">
                    ${this.todo.desc}
                </p>
                <button @click="${this.remove}" removeItem="${this.todo.id}">Remove</button>
            </div>
        `;
    }

    remove(e) {
        const id = e.currentTarget.getAttribute('removeItem');
       this.dispatchEvent(new CustomEvent('remove-item', {
           detail: id
       }));
    }

    toogle(e) {
       this.dispatchEvent(new CustomEvent('toogle-item', {
           detail: this.index
       }));
    }

}

window,customElements.define('todo-list-item', TodoListItem)