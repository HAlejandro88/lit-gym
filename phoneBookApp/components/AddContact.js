import { LitElement,html,css } from 'lit-element';
import '@vaadin/vaadin-form-layout';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-button';
class AddContact extends LitElement {
    static get properties() {
        return {}
    }

    static get styles() {
        return css``;
    }

    constructor() {
        super();
    }

    render() {
        return html`
        <vaadin-form-layout>
            <vaadin-text-field class="form-layout" label="Nombre"></vaadin-text-field>
            <vaadin-text-field class="form-layout" label="Apellido"></vaadin-text-field>
            <vaadin-text-field class="form-layout" label="Email" ></vaadin-text-field>
            <vaadin-text-field class="form-layout" label="Phone" ></vaadin-text-field>
            <vaadin-text-field class="form-layout" label="comany"></vaadin-text-field>
        </vaadin-form-layout>
        <vaadin-button @click="${this.addContact}">Agregar</vaadin-button>
        `;
    }

    addContact(e) {
        const [Nombre, Apellido, Email, Phone, company ] = this.shadowRoot.querySelectorAll('.form-layout');
        this.dispatchEvent(new CustomEvent('add-contact', {
            detail: {
                name: Nombre.value,
                lastName: Apellido.value,
                phone: Phone.value,
                email: Email.value,
                company: company.value
            } 
        })) 
        Nombre.value = '', 
        Apellido.value = '', 
        Email.value = '', 
        Phone.value = '', 
        company.value = ''   
    }
}

window.customElements.define('add-contact', AddContact)