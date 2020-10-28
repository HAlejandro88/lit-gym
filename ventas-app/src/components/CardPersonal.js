import { LitElement, html, css } from 'lit-element';


class CardPersonal extends LitElement {
    static get properties() {
        return {
            img: String,
            title: String,
            description: String,
            sub_title: String
        };
    }

    
    constructor() {
        super();
        this.img = '';
    }

    static get styles() {
        return css`
        :host {
            width: 400px;
            height: 680px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            margin: 5px;
        } 

        .card {
            display: grid;
            grid-template-columns: 300px;
            grid-template-rows: 210px 210px 80px;
            grid-template-areas: "image" "text" "stats";
            font-family: roboto;
            border-radius: 18px;
            background: white;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
            text-align: center;
            transition: 0.5s ease;
            cursor: pointer;
        }
        .card-image {
            grid-template: image;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            background-size: cover;
            
        }
        .card-text {
            grid-template: text;
            margin: 25px;
        }
        .card-text .date {
            color: rgb(255, 1, 110);
            font-size: 13px;
        }
        .card-text p {
            color: grey;
            font-size: 15px;
            font-weight: 300;
        }

        .card-text h2 {
            margin-top: 0px;
            font-size: 28px;
            text-transform: capitalize;
        }

        .card-stats {
            grid-template: stats;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            background: #292828;
        }

        .card-stats .stat {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 10px;
            color: white;
        }

        .card-stats .type {
            font-size: 11px;
            font-weight: 300;
            text-transform: uppercase;
        }
        .card-stats .value {
            font-size: 22px;
            font-weight: 500;
        }

        .card:hover {
            transform: scale(1.2);
            box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
        }
        `
    }

    firstUpdated(changedProperties) {
        this.shadowRoot.querySelector('.card-image').style.backgroundImage = `url(${this.img})`;
      }


    render() {
        return html`
            <div class="card">
                <div class="card-image"></div>
                <div class="card-text">
                    <span class="date">${this.sub_title}</span>
                    <h2>${this.title}</h2>
                    <p>${this.description}</p>
                </div>
                <div class="card-stats">
                    <div class="stat">
                        <div class="value">4m</div>
                        <div class="type">Read</div>
                    </div>
                    <div class="stat">
                        <div class="value">4m</div>
                        <div class="type">Read</div>
                    </div>
                    <div class="stat">
                        <div class="value">4m</div>
                        <div class="type">Read</div>
                    </div>
                </div>
            </div>
        `;
    }

}

window.customElements.define('card-personal', CardPersonal);