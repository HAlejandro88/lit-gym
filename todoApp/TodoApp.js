import { LitElement, html, css } from 'lit-element';
import './TodoList';

class Todoapp extends LitElement {
    static get properties() {
        return {
            todos: { type: Array }
        }
    }

    static get styles() {
        return css``;
    }

    constructor() {
        super();
        this.todos = [
                { done: true,  id: "1", desc: 'primera tarea' },
                { done: false, id: "2", desc: 'segunda' },
                { done: false, id: "3", desc: 'terminar lit' },
                { done: false, id: "4", desc: 'terminar react' },
                { done: true,  id: "5", desc: 'cloud computing' },
        ]
    }

    render() {
        return html`
            <todo-list .todos="${this.todos}"></todo-list>
        `;
    }
}
window.customElements.define('todo-app', Todoapp);