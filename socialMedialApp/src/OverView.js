import {  LitElement, html, css  } from 'lit-element';



class OverView extends LitElement {
    static get properties () {
        return {
            title: String,
            img: String,
            nums: Number,
            secondUpdate: String,
            arrow: String,
        }
    }

    static get styles () {
        return css`
          :host {
            display: flex;
            min-width: 250px;
            height: 160px;
            text-align: center;
            background-color: hsl(227, 47%, 96%);
            color: hsl(230, 17%, 14%);
            border-radius: 5px;
          }
          section {
            width: 100%;
            padding: 20px 0px;
          }
          section div {
            display: flex;
            justify-content: space-around;
          }
          section .sn-section {
            margin-top: 20px;
            margin-bottom: 30px;
          }
          section .update-section .nums {
            font-size: 25px;
            font-weight: 700;
            color: var(--nums-color, black)
          }
          section .update-section img {
            width: 10px;
            height: 5px;
            margin-top: 10px;
            margin-right: 5px;
          }
          section .update-section .percentage {
            color: var(--arrow);
          }
        `;
    }

    constructor() {
        super();
        this.title = '';
        this.img = '';
        this.nums = 0;
        this.secondUpdate = 0 ;
        this.arrow = '';
    }

    render() {
        return html`
           <section>
                <div class="sn-section">
                    <span>${this.title}</span>
                    <img src="${this.img}"/>
                </div>
                <div class="update-section">
                    <span class="nums">${this.nums}</span>
                    <div>
                        <img src="${this.arrow}"/>
                        <span class="percentage">${this.secondUpdate}</span>
                    </div>
                </div>
            </section>
        `;
    }
}

window.customElements.define('over-view', OverView);
