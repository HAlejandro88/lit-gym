import { LitElement, html } from 'lit-element';
import { outlet } from 'lit-element-router';
 
class MainOutlet extends outlet(LitElement) {
  render() {
    return html`
      <slot></slot>
    `;
  }
}
 
customElements.define('main-outlet', MainOutlet);