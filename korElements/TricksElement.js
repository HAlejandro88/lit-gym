import {  LitElement, html,css  } from 'lit-element';
import '@kor-ui/kor/components/button';
import '@kor-ui/kor/components/badge';


class TricksElement extends LitElement {
    static get properties() {
        return {}
    }

    static get styles() {
        return css`
            .badge {
              position: relative;
              left: 65px;
              top: 10px;
              z-index: 1;
              background-color: red;
            }
          .btn {
            position: relative;
          }
        `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
           
            <h1>Hola component</h1>
            <kor-badge label="1" class="badge"></kor-badge>
            <kor-button label="hola" color="primary" class="btn"></kor-button>
        `;
    }
}


window.customElements.define('tricks-element',TricksElement)
