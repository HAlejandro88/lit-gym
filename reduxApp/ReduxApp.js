import { LitElement,html  } from 'lit-element';
import '@polymer/paper-input/paper-input';
import '@vaadin/vaadin-select/vaadin-select';
import '@vaadin/vaadin-list-box/vaadin-list-box';
import '@vaadin/vaadin-item/vaadin-item';

import {  connect  } from 'pwa-helpers';
import { store } from "./store";
import { addTodo,clearCompleted,updateFilter, updateTodoStatus } from "./actions/action";


class ReduxApp extends connect(store)(LitElement) {
    constructor() {
        super();
    }

    async stateChanged(state) {
        this.todos = state.todos;
        this.filter = state.filter;

        await this.requestUpdate();
    }


    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);

        this.shadowRoot.querySelector('#filter').renderer = root => {
            if (root.firstElementChild) {
                return;
            }

            // Note that innerHTML is only used for demo purposes here!
            // Prefer using a templating library instead.
            root.innerHTML = `
              <vaadin-list-box>
                <vaadin-item value="All">Todos</vaadin-item>
                <vaadin-item value="Active">Pendientes</vaadin-item>
                <vaadin-item value="Completed">Completados</vaadin-item>
              </vaadin-list-box>
            `;
        };
    }

    render() {
        return html`
            <h2>Hola mundo, filtro seleccionado ${this.filter}</h2>
            <paper-input label="Agregar nueva tarea"></paper-input>
            <button @click="${this.addTodo}">Agregar</button>
            <button @click="${this.clearCompleted}">Limpiar los completados</button>
            
            <h2>Tareas</h2>
            <vaadin-select id="filter" @value-changed="${this.filterChanged}"></vaadin-select>
            
            <table>
                <tr>
                    <th>Tarea</th>
                    <th>Estatus</th>
                </tr>
                ${this.todos.map(task => html`
                    <tr>
                        <td><input type="checkbox" task="${task}" ?checked="${task.complete}" 
                                   @change="${this.updateTodosStatus}" > ${task.task}</td>
                        <td>${task.complete ? 'Completada' : 'Pendiente'}</td>
                    </tr>
                `)}
            </table>
        `;
    }

    addTodo() {
        const task = this.shadowRoot.querySelector('paper-input');
        if(task.value !== '') {
            store.dispatch(addTodo(task.value));
            task.value = '';
        }
    }

    updateTodosStatus(event) {
        console.log();
        const todo = event.currentTarget.getAttribute('task');
        store.dispatch(updateTodoStatus(todo,event.target.checked));
    }

    filterChanged({detail}) {
        if(detail.value && detail.value !== '') {
            store.dispatch(updateFilter(detail.value));
        }
    }

    clearCompleted() {
        store.dispatch(clearCompleted());
    }
}

customElements.define('redux-app',ReduxApp);
