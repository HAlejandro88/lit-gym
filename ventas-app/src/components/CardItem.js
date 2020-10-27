import { LitElement, html, css } from 'lit-element';

class CardItem extends LitElement {
    static get properties() {
        return {
            descripcion: String,
            idLista: String,
            direccion: String,
            img: String,
            status: Boolean
        }
    }

    static get styles() {
        return css`
        :host{
            margin: 0;
            padding: 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

        .wrap{
            width: 1100px;
            margin: 50px auto;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
        }
        
        .tarjeta-wrap{
            margin: 10px;
            -webkit-perspective: 800;
            perspective: 800;
        }
        
        .tarjeta{
            width: 300px;
            height: 350px;
            background: #F29720;
            position: relative;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -webkit-transition: .7s ease;
            transition: .7s ease;
            -webkit-box-shadow: 0px 10px 15px -5px rgba(0,0,0,0.65);
            box-shadow: 0px 10px 15px -5px rgba(0,0,0,0.65);
        
        }
        
        .adelante, .atras{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }
        
        .adelante{
            width: 100%;
        }
        
        .atras{
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
        
            padding: 15px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
        
            text-align: center;
            color: #fff;
            font-family: "open sans";
          background: #F29720;
        }
        
        .tarjeta-wrap:hover .tarjeta{
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }
        
        .card1{
            background-image: url('https://dam.smashmexico.com.mx/wp-content/uploads/2020/04/ayuda-a-tu-pequeno-a-hacer-el-cinturon-de-batman-cover.jpg');
            background-size: cover;
        }
        `
    }


    constructor() {
        super();
    }

    render() {
        return html`
        <div class="wrap">
            <div class="tarjeta-wrap">
                <div class="tarjeta">
                    <div class="adelante card1"></div>
                    <div class="atras">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ex velit beatae. Illum, suscipit, aspernatur!</p>
                    </div>
                </div>
            </div>
	    </div>
        `;
    }

}

window.customElements.define('card-item', CardItem)