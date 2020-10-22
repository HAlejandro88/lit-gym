import { LitElement, html, css } from 'lit-element';
import './TodoListItem';

class TodoList extends LitElement {
    static get properties() {
        return {
            todos: { type: Array }
        }
    }

    constructor() {
        super();
        this.todos = [];
    }

    render() {
        return html`
            ${this.todos.map((todo, index) => html`
                <todo-list-item 
                    .todo="${todo}" 
                    .index="${index}"
                    ?checked="${todo.done}" 
                    @remove-item="${this.remove}" 
                    @toogle-checked="${this.toogleChecked}">
                </todo-list-item>
            `)}
        `;
    }

    async remove({ detail }) {  
        this.delete(detail.id, this.todos)
        await this.requestUpdate();
    }

    delete(position, Array) {
        Array.splice(position, 1)
    }


    async toogleChecked({ detail }) {
        console.log(detail.index);
        this.todos = this.todos.map((todo, index) => {
            return index === detail.index ? { ...todo, done: !todo.done} : todo
        });
    }
}

window.customElements.define('todo-list', TodoList);