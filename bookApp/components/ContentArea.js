import { LitElement, html, css } from 'lit-element';

class ContentArea extends LitElement {
    static get properties () {
        return {}
    }

    static get properties () {
        return css``;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <section id="content-area">
                <section class="contacts">
                    <h2>Contacts</h2>
                    <div class="contact">
                        <div class="user-image"></div>
                        <div class="full-name">
                            Alejandro Soto
                        </div>
                        <div class="number">
                            718-219-8652
                        </div>
                        <div class="state">
                            NY
                        </div>
                        <div class="category">
                            Family
                        </div>
                    </div>
                </section>
            </section>
        `;
    }
}

window.customElements.define('content-area', ContentArea);
