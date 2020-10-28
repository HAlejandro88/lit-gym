import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-icons/vaadin-icons.js';

class CounterComponent extends LitElement {
    
    static get properties() {
        return { 
            title_one: String,
            sub_title_one: String,
            title_two: String,
            sub_title_two: String,
            counter_one: Number,
            counter_two: Number,
        };
    }
    
    static get styles() {
        return css`
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .counter {
            width: 500px;
            height: 130px;
            display: grid;
            grid-template-columns: 250px 250px; 
            grid-template-rows: 130px;
            grid-template-areas: "one" "two";
            font-family: roboto;
            border-radius: 18px;
            background: white;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.5);
            text-align: center;
            padding: 10px;
            
        }
        .counter-one {
            grid-template: one;
        }

        .counter-one h4 {
            margin-top: 5px;
            margin-bottom: 5px;
            text-transform: capitalize;
            font-size: 20px;
        }

        .counter-one h2 {
            font-size: 38px;
            color: grey;
        }

        .counter-two {
            grid-template: two;
            border-left: 2px solid red;
        }

        .counter-two h4 {
            margin-top: 5px;
            margin-bottom: 5px;
            text-transform: capitalize;
            font-size: 20px;
        }

        .counter-two h2 {
            font-size: 38px;
            color: grey;
        }
        iron-icon {
            color: #BEC606;
        }
        `
    }

    constructor() {
        super();
        this.title_one = '';
        this.sub_title_one = '';
        this.title_two = '';
        this.sub_title_two = '';
        this.counter_one = 0;
        this.counter_two = 0;
    }

    render() {
        return html`
            <div class="counter">
                <div class="counter-one">
                    <iron-icon icon="vaadin:lightbulb"></iron-icon>
                    <h4>${this.title_one}gayol</h4>
                    <h2>${this.counter_one}</h2>
                </div>
                <div class="counter-two">
                    <iron-icon icon="vaadin:lightbulb"></iron-icon>
                    <h4>${this.title_two}providencia</h4>
                    <h2>${this.counter_two}</h2>
                </div>
            </div>
        `
    }

    increment() {
        this.dispatchEvent(new CustomEvent('increment-counter', {
            detail: (sucursal) => {
                if (sucursal === 'gayol') {
                    this.counter_one++;
                }
                else {
                    this.counter_two++;
                }
            }
        }))
    }
}
customElements.define('counter-component', CounterComponent);