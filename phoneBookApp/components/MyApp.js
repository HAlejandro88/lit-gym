import { LitElement, html } from 'lit-element';
import { router } from 'lit-element-router';
 
import './AppLink';
import './MainOutlet';

import '../pages/HomePage';
import '../pages/DashboardPage';
import '../pages/ContactUser';
 
class MyApp extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object }
    };
  }
 
  static get routes() {
    return [
      {
        name: 'home',
        pattern: '',
      }, 
      {
        name: 'dashboard',
        pattern: 'dashboard'
      }, 
      {
        name: 'contact',
        pattern: 'contact/:id'
      }, 
      {
        name: 'not-found',
        pattern: '*'
    }];
  }
 
  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
  }
 
  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log(route, params, query, data);
  }
 
  render() {
    return html`
      <app-link href="/">Home</app-link>
      <app-link href="/dashboard">Dashboard</app-link>
      <app-link href="/contact/14">Conatct/14</app-link>
 
      <main-outlet active-route=${this.route}>
          <home-page route="home"></home-page>
          <dashboard-page route="dashboard"></dashboard-page>
          <contact-user route="contact" .user=${this.params.id}></contact-user>
      </main-outlet>
    `;
  }
}
 
customElements.define('my-app', MyApp);