import { LitElement, html, css } from 'lit-element';
import '@vaadin/vaadin-icons/vaadin-icons.js';

class CounterComponent extends LitElement {
    
    static get properties() {
        return { 
            title_one: String,
            title_two: String,
            counter_one: {
                type: Number,
                hasChanged(newValue, oldValue) {
                    return newValue !== oldValue;
                }
            },
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

        /* .counter-one h2 {
            font-size: 38px;
            color: grey;
        }  */

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

        .counter {
            font-size: 38px;
            color: grey;
        }

        .aux {
            margin: 0;
        }

        iron-icon {
            color: #BEC606;
        }
        `
    }

    constructor() {
        super();
        this.title_one = '';
        this.title_two = '';
        this.counter_one = 1000;
        this.counter_two = 2000;
    }

    updated(changedProperties) {
        const counterSucursal = this.shadowRoot.querySelectorAll('.aux');
        const speed = 200;

        counterSucursal.forEach(counter => {
            const UpdateCount = () => {
                const _counter = counter.getAttribute('data-target');
                const target = +this[_counter];
                const count =  +counter.textContent;
        
                const inc = target / speed;

                if (count < target) {
                    counter.textContent = Math.ceil(count + inc);
                    setTimeout(UpdateCount, 1)
                } else {
                    counter.textContent = target;
                }
            }
            UpdateCount(); 
        })
    }

    render() {
        return html`
            <div class="counter">
                <div class="counter-one">
                    <iron-icon icon="vaadin:lightbulb"></iron-icon>
                    <h4>gayol</h4>
                    <h2 class="aux" data-target="counter_one">0</h2>
                </div>
                <div class="counter-two">
                    <iron-icon icon="vaadin:lightbulb"></iron-icon>
                    <h4>${this.title_two}providencia</h4>
                    <h2 class="aux" data-target="counter_two">0</h2>
                </div>
            </div>
        `
    }

    async increment() {
        this.counter_one++;
        try {
            await this.requestUpdate();
            this.dispatchEvent(new CustomEvent('counter-incremented', {
                detail: {
                    value: this.counter_one,
                    counter: 'counter_one'
                }
            }))
        } catch (error) {
            this.dispatchEvent(new CustomEvent('increment-failed'))
        }
    }

}
customElements.define('counter-component', CounterComponent);