import { LitElement, html, css } from 'lit-element';

class SideMenu extends LitElement {
    static get properties() {
        return {
            options: Array,
            isOpen: Boolean
        }
    }

    static get styles() {
        return css`
          .sidenav {
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: #111;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 60px;
          }

          .sidenav a {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 25px;
            color: #818181;
            display: block;
            transition: 0.3s;
          }

          .sidenav a:hover {
            color: #f1f1f1;
          }

          .sidenav .closebtn {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            margin-left: 50px;
          }

          @media screen and (max-height: 450px) {
            .sidenav {padding-top: 15px;}
            .sidenav a {font-size: 18px;}
          }
          
          .open__sidebar {
            font-size:30px;
            cursor:pointer;
          }
        `;
    }

    constructor() {
        super();
        this.options = [];
        this.isOpen = false;
    }

    render() {
        return html`
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" @click="${this.closeNav}">&times;</a>
                ${this.options.map(option => html`
                    <a .href="${option.href}">${option.name}</a>
                `)}
            </div>
            
            <span class="open__sidebar"  @click="${this.openNav}">&#9776;</span>
        `;
    }
    openNav() {
        this.shadowRoot.getElementById("mySidenav").style.width = "250px";
    }

    closeNav() {
        this.shadowRoot.getElementById("mySidenav").style.width = "0";
    }
}

window.customElements.define('side-menu', SideMenu);
