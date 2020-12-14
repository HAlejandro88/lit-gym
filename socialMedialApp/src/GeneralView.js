import {  LitElement, html, css  } from 'lit-element';


class GeneralView extends LitElement {
    static get properties() {
        return {
            img: String,
            sn: String,
            nums: Number,
            followers: Number,
            secondUpdate: String,
            arrow: String
        }
    }

    static get styles() {
        return css`
            :host {
              display: inline-block;
              min-width: 250px;
              height: 200px;
              text-align: center;
              background-color: hsl(227,47%, 96%);
              color: hsl(230, 17%, 14%);
              border-radius: 5px;
            }
            .sn-section {
              margin-top: 25px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
              .sn-section img {
                width: 25px;
                height: 25px;
                margin-right: 10px;
              }
              .sn-section span {
                font-weight: 700;
              }
              .followers-section {
                margin-bottom: 15px;
              }
              .followers-section h2 {
                font-size: 45px;
                margin: 25px 0 0 0;
                color: var(--nums-color, black);
              }
              .followers-section span {
                font-weight: lighter;
                letter-spacing: 5px;
              }
              .updates-section .arrow-icon {
                width: 10px;
              }
              .updates-section span {
                color: var(--arrow);
              }
        `;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <section>
                <div class="sn-section">
                    <img src="${this.img}" alt="${this.img}">
                    <span>${this.sn}</span>
                </div>
                <div class="followers-section">
                    <h2>${this.nums}</h2>
                    <span>${this.followers}</span>
                </div>
                <div class="updates-section">
                    <img class="arrow-icon" src="${this.arrow}" alt="${this.arrow}">
                    <span>${this.secondUpdate}</span>
                </div>
            </section>
        `;
    }
}

window.customElements.define('general-view', GeneralView);
