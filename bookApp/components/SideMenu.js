import { LitElement, html, css } from 'lit-element';

class SideMenu extends LitElement {
    static get properties() {
        return {}
    }

    static get styles() {
        return css`
            #side-menu {
              color: white;
            }
        `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <section id="side-menu">
                <div class="logo"></div>
                <div class="menu">
                    <div class="title">Contacts</div>
                    <nav>
                        <a href="">Add Contact</a>
                        <a href="">view</a>
                        <a href="">Delete</a>
                        <a href="">Find</a>
                    </nav>
                </div>
            </section>
        `;
    }
}

window.customElements.define('side-menu', SideMenu);
