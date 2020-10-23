import { LitElement, html, css } from 'lit-element';
import './TodoListItem';

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
                { checked: false,  id: "1", desc: 'primera tarea' },
                { checked: false, id: "2", desc: 'segunda' },
                { checked: false, id: "3", desc: 'terminar lit' },
                { checked: false, id: "4", desc: 'terminar react' },
                { checked: false,  id: "5", desc: 'cloud computing' },
        ]
    }

    render() {
        return html`
            ${this.todos.map((todo, index) => html`
                <todo-list-item 
                    ?checked="${todo.checked}" 
                    .desc="${todo.desc}"
                    .id="${todo.id}"
                    .index="${index}"
                    @remove-item="${this.remove}"
                    @checked-item="${this.toogle}">
                </todo-list-item>
            `)}
        `;
    }

    async remove({ detail }) {
        console.log(detail);
        this.todos = this.todos.filter(todo => todo.id !== detail);
        await this.requestUpdate();
    }

    
    async toogle({ detail }) {
        this.todos = this.todos.map(todo => {
            const { checked, id } = todo;
            if (id === detail) {
                return {...todo, checked: !checked}
            } else {
                return { ...todo }
            }
        });
        this.requestUpdate();
        console.log(this.todos)
    }


}
window.customElements.define('todo-app', Todoapp);