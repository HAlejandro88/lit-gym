import { LitElement, html, css } from 'lit-element';


class NotFoundPage extends LitElement {

    static get styles() {
        return css`
            :host {
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              background: linear-gradient(135deg,#03a9f4,#03a9f4 50%, #333 50%,#333);
            }
          
          .box {
            position: relative;
          }
          .box h2 {
            color: #f3f3f3;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15em;
            text-shadow: -25px 25px 40px rgba(0,0,0,0.5),
                          -10px 10px 0 rgba(255,255,255,0.5),
                          -20px 20px 0 rgba(255,255,255,0.2),
                          -30px 30px 0 rgba(255,255,255,0.05);
          }

          .box h2 .zero {
            position: relative;
            display: inline-block;
            width: 200px;
            height: 200px;
            background: linear-gradient(to bottom, #fff, #777);
            border-radius: 50%;
            margin: 0 15px;
            box-shadow:  -25px 25px 40px rgba(0,0,0,0.5)
          }

          .box h2 .zero::before {
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            width: 180px;
            height: 180px;
            background: linear-gradient(to top, #fff, #777);
            border-radius: 50%;
          }

          .box h2 .zero::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg,#03a9f4,#03a9f4 50%, #333 50%,#333);
            border-radius: 50%;
            box-shadow: inset 0 0 30px rgba(0,0,0,1);
            animation: animate 5s steps(4) infinite;
          }
          @keyframes animate {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `;
    }

    render() {
        return html`
            <div class="box">
                <h2>4<span class="zero"></span>4</h2>
                
            </div>
        `;
    }
}


window.customElements.define('not-found-page', NotFoundPage)
