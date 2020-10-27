import { LitElement, html, css } from 'lit-element';
import './src/components/CardPersonal';
import './src/components/CounterComponent';

class VentasApp extends LitElement {
    static get properties() {
        return {
            cards: Array
        }
    }

   static get styles() {
       return css`
       .cards {
           display: grid;
           grid-template-columns: repeat(4, 1fr);
       }


       `
   }

   constructor() {
       super();
      this.cards = [
        { 
            title: 'Batman', 
            description: 'vigilanete d ela noche, mejor detective de todo el mundo, mejor amigo y superheroe del mundo', 
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdOdfOJxZoOCwYDzjjyuiAzWuyTvU1-nPSmA&usqp=CAU',
            subTitulo: 'Bruce Wayne'
        },
        { 
            title: 'Superman', 
            description: 'el hombre de acero , agente que viene de krypton, hojo de Jor-El', 
            img: 'https://www.cuartomundo.cl/wp-content/uploads/2020/01/bendis-is-here.png',
            subTitulo: 'Clark Kent'
        },
        { 
            title: 'flash', 
            description: 'Flash (también conocido por su apodo "El Velocista Escarlata") es un superhéroe de DC Comics que posee una rapidez sobrehumana, la cual incluye la habilidad de correr a gran velocidad, reflejos sobrehumanos y la capacidad de violar algunas leyes de la física.', 
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt54FCheTM7MFjb381QgqdalxGJWLrT1PVpw&usqp=CAU',
            subTitulo: 'Barry Allen'
        },
        { 
            title: 'wonder Woman', 
            description: 'Wonder Woman is a compassionate caring, stubborn, opinionated, highly competitive, outgoing, immortal Amazon. Wonder Woman is a warrior born. She tries to avoid conflict but if pressed she will engage in battle and on occasion lose herself in the pleasure of battle.', 
            img: '',
            subTitulo: 'Diana'
        },
        
      ];
   }

   render() {
       return html`
            <counter-component></counter-component>
       `;
   }


   
}

window.customElements.define('ventas-app', VentasApp)