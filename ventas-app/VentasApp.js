import { LitElement, html, css } from 'lit-element';

class VentasApp extends LitElement {
    static get properties() {
        return {}
    }

   static get styles() {
       return css`...`
   }

   constructor() {
       super();
   }

   render() {
       return html``;
   }
   
}

window.customElements.define('ventas-app', VentasApp)