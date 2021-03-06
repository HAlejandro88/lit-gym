import { LitElement, html, css } from 'lit-element';
import './TodoListItem';

class Todoapp extends LitElement {
    static get properties() {
        return {
            todos: { type: Array },
            label: String
        }
    }

    static get styles() {
        return css``;
    }

    constructor() {
        super();
        this.todos = [
                { checked: true,  id: "1", desc: 'primera tarea' },
                { checked: false, id: "2", desc: 'segunda' },
                { checked: false, id: "3", desc: 'terminar lit' },
                { checked: false, id: "4", desc: 'terminar react' },
                { checked: false,  id: "5", desc: 'cloud computing' },
        ];
        this.label = '';
    }


    render() {
        return html`
            ${this.todos.map((todo, index) => html`
                <todo-list-item 
                    .todo="${todo}"
                    .index="${index}"
                    @toogle-item="${this.toogle}"
                    @remove-item="${this.remove}">
                </todo-list-item>
            `)}
        `;
    }

    async remove({ detail }) {
        console.log(detail);
        /* this.todos = this.todos.filter((todo,index) => index !== detail); */
        this.todos = this.todos.filter(todo => todo.id !== detail)
        await this.requestUpdate();
    }

    
    async toogle({ detail }) {
        this.todos = this.todos.map((todo, index) => {
            const { checked, id } = todo;
            if (index === detail) {
                return { ...todo, checked: !checked }
            } else {
                return { ...todo }
            }
        });
        await this.requestUpdate();
        console.log(this.todos)
    }

    

}
window.customElements.define('todo-app', Todoapp);
