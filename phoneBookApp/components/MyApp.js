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
    <vaadin-app-layout>
    <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
      <img slot="navbar" src="https://i.imgur.com/GPpnszs.png" alt="Vaadin Logo" width="100" height="31" referrerpolicy="no-referrer">
      <vaadin-tabs slot="drawer" orientation="vertical" theme="minimal" style="margin: 0 auto; flex: 1;">
          <vaadin-tab tab-page="home">
              <iron-icon icon="vaadin:home"></iron-icon>
              <app-link href="/">Home</app-link>
          </vaadin-tab>
          <vaadin-tab tab-page="list">
              <iron-icon icon="vaadin:list"></iron-icon>
              <app-link href="/dashboard">Dashboard</app-link>
          </vaadin-tab>
          <vaadin-tab tab-page="upload-list">
              <iron-icon icon="vaadin:options"></iron-icon>
              <app-link href="/contact/14">Conatct/14</app-link>
          </vaadin-tab>
          <vaadin-tab tab-page="search">
              <iron-icon icon="vaadin:search"></iron-icon>
              Buscador
          </vaadin-tab>
          <vaadin-tab tab-page="register">
              <iron-icon icon="vaadin:clipboard-text"></iron-icon>
              Registro
          </vaadin-tab>
          <vaadin-tab >
              <iron-icon icon="vaadin:out"></iron-icon>
              Cerrar Sesión
          </vaadin-tab>
      </vaadin-tabs>
          <div class="content">
            <main-outlet active-route=${this.route}>
              <home-page route="home"></home-page>
              <dashboard-page route="dashboard"></dashboard-page>
              <contact-user route="contact" .user=${this.params.id}></contact-user>
            </main-outlet>
          </div>
      </vaadin-app-layout>
      
      
      
 
      
    `;
  }
}
 
customElements.define('my-app', MyApp);