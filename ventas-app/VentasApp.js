import { LitElement, html, css } from 'lit-element';
import './src/components/CardPersonal';

class VentasApp extends LitElement {
    static get properties() {
        return {
            image: String
        }
    }

   static get styles() {
       return css`...`
   }

   constructor() {
       super();
       this.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdOdfOJxZoOCwYDzjjyuiAzWuyTvU1-nPSmA&usqp=CAU';
   }

   render() {
       return html`
        <card-personal .img="${this.image}"></card-personal>
       `;
   }
   
}

window.customElements.define('ventas-app', VentasApp)