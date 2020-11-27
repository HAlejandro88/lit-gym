import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-grid/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter';
class DashboardPage extends LitElement {
    static get properties() {
        return {
            users: { 
                type: Array,
                hasChanged(newValue, oldValue) {
                    return newValue !== oldValue;
                }
             }
        }
    }

    static get styles() {
        return css`
            .table-adapter {
                width: 95%;
            }
        `;
    }

    constructor() {
        super();
        this.users = [];
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.users = JSON.parse(localStorage.getItem('contacts'));
        this.getUsers();
      }

    render() {
        return html`
        <add-contact @add-contact="${this.addContact}"></add-contact>
        <div class="table-adapter">
            <vaadin-grid>
                <vaadin-grid-column path="name" ></vaadin-grid-column>
                <vaadin-grid-column path="lastName" ></vaadin-grid-column>
                <vaadin-grid-column path="phone"></vaadin-grid-column>
                <vaadin-grid-column path="company" ></vaadin-grid-column>
                <vaadin-grid-column path="email"></vaadin-grid-column>
            </vaadin-grid>
        </div>
        `;
    }

    async update(changedProperties) {
        super.update(changedProperties);
        this.getUsers();
        await this.requestUpdate();
    }

    async addContact({ detail }) {
        const newContact = detail;
        console.log(newContact);
        this.users = [...this.users,newContact];
        this.saveLocalstorage();
        await this.requestUpdate();
    }

    saveLocalstorage() {
        localStorage.setItem('contacts', JSON.stringify(this.users));
    }

    getUsers() {
        this.shadowRoot.querySelector('vaadin-grid').items = this.users;
    }

}

window.customElements.define('dashboard-page', DashboardPage);