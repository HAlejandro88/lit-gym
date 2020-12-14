import {  LitElement, html, css  } from 'lit-element';
import './GeneralView';
import './OverView';

import {  facebook, twitter, instagram, youtube  } from './data';

import { dailyFacebook, dailyFacebookLikes, dailyInstagram, dailyInstagramLikes, dailyTwitter, dailyTwitterLikes, dailyYoutube, dailyYoutubeLikes } from './data';


class SocialMediaApp extends LitElement {
    static get properties () {
        return {
            toggle: Boolean
        }
    }

    static get styles () {
        return css`
          :host {
            display: block;
            width: 100vw;
            height: 100vh;
            --facebook: hsl(195, 100%, 50%);
            --twitter: hsl(203, 89%, 53%);
            --instagram: hsl(329, 70%, 58%);
            --youtube: hsl(348, 97%, 39%);
            --font-color: hsl(228, 12%, 44%);
          }
          :host([dark]) header {
            background-color: hsl(232, 19%, 15%);
          }
          :host([dark]) {
            background: hsl(230, 17%, 14%);
            color: hsl(0, 0%, 100%);
          }
          :host([dark]) gv-component, :host([dark]) ov-component {
            background: hsl(228, 28%, 20%);
            color: hsl(228, 34%, 66%);
            --nums-color: hsl(0, 0%, 100%);
          }
          header {
            width: 100%;
            height: 300px;
            background-color: hsl(225, 100%, 98%);
          }
          header .header-container {
            display: flex;
            max-width: 1050px;
            margin: 0 auto;
            padding: 0 10px;
            padding-top: 50px;
          }
          header .toggle-container {
            align-self: center;
          }
          header .title-container, header .toggle-container {
            width: 50%;
          }
          header .title-container h1 {
            margin: 0;
          }
          header .toggle-container input {
            float: right;
          }
          header .toggle-container input[type="checkbox"] {
            position: relative;
            width: 80px;
            height: 40px;
            -webkit-appearance: none;
            background: linear-gradient(45deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
            border-radius: 20px;
            outline: none;
            box-shadow: inset 0 0 5px rgba(0,0,0,.2);
          }
          header .toggle-container input[type="checkbox"]:before {
            content: '';
            position: absolute;
            width: 35px;
            height: 35px;
            border-radius: 20px;
            background: #f4f7ff;
            top: 2px;
            right: 2px;
            transition: .5s;
            box-shadow: 0 0 5px rgba(0,0,0,.2);
          }
          header .toggle-container input:checked[type="checkbox"]:before {
            right: 43px;
            background: hsl(232, 19%, 15%);
          }
          header .toggle-container span {
            float: right;
            margin-right: 15px;
            margin-top: 13px;
          }
          header div p {
            color: var(--font-color);
            margin-top: 5px;
          }
          main {
            max-width: 1100px;
            margin: 0 auto;
            text-align: center;
            margin-top: -100px;
            padding: 0 10px;
          }
          .gv-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            column-gap: 10px;
            row-gap: 15px;
          }
          gv-component:hover {
            cursor: pointer;
            background-color: hsl(227, 36%, 91%);
          }
          overview-container:hover {
            cursor: pointer;
            background-color: hsl(227, 36%, 91%);
          }
          .facebook {
            border-top: 5px solid var(--facebook);
            --arrow: hsl(163, 72%, 41%);
          }
          .twitter {
            border-top: 5px solid var(--twitter);
            --arrow: hsl(163, 72%, 41%);
          }
          .instagram {
            border-top: 5px solid var(--instagram);
            --arrow: hsl(163, 72%, 41%);
          }
          .youtube {
            border-top: 5px solid var(--youtube);
            --arrow: hsl(356, 69%, 56%);
          }
          main .ov-container h2 {
            color: var(--font-color);
            float: left;
            margin-left: 20px;
          }
          .overview-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            column-gap: 10px;
            row-gap: 15px;
            justify-items: center;
          }
          .arrow-down {
            --arrow: hsl(356, 69%, 56%);
          }
          .arrow-up {
            --arrow: hsl(163, 72%, 41%);
          }
        `;
    }

    constructor() {
        super();
        this.toggle = false;
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        const toogle = this.shadowRoot.querySelector('input[type="checkbox"]');
        const toggleTitle = this.shadowRoot.querySelector('.toggle-title');

        toogle.addEventListener('click', event => {
            if(!this.toggle) {
                toggleTitle.textContent = "Light Mode";
                this.toggle = true;
            } else {
                toggleTitle.textContent = "Dark Mode";
                this.toggle = false;
            }
            this.changeForDarkMode(event);
        })
    }

    render() {
        return html`
           <header>
               <div class="header-container">
                   <div class="title-container">
                       <h1>Social Media Dashboard</h1>
                       <p>total Followers</p>
                   </div>
                   <div class="toggle-container">
                       <input type="checkbox" />
                       <span class="toggle-title">Dark Mode</span>
                   </div>
               </div>
           </header>
           <main>
               <section class="gv-container">
                   <general-view class="facebook" 
                                 .img="${facebook.img}"
                                 .sn="${facebook.sn}"
                                 .nums="${facebook.nums}"
                                 .followers="${facebook.followers}"
                                 .secondUpdate="${facebook.update}"
                                 .arrow="${facebook.arrowUp}">
                   </general-view>
                   <general-view class="twitter" 
                                 .img="${twitter.img}"
                                 .sn="${twitter.sn}"
                                 .nums="${twitter.nums}"
                                 .followers="${twitter.followers}"
                                 .secondUpdate="${twitter.update}"
                                 .arrow="${twitter.arrowUp}">
                   </general-view>
                   <general-view class="instagram" 
                                 .img="${instagram.img}"
                                 .sn="${instagram.sn}"
                                 .nums="${instagram.nums}"
                                 .followers="${instagram.followers}"
                                 .secondUpdate="${instagram.update}"
                                 .arrow="${instagram.arrowUp}">
                   </general-view>
                   <general-view class="youtube" 
                                 .img="${youtube.img}"
                                 .sn="${youtube.sn}"
                                 .nums="${youtube.nums}"
                                 .followers="${youtube.followers}"
                                 .secondUpdate="${youtube.update}"
                                 .arrow="${youtube.arrowDown}">
                   </general-view>
               </section>
               <div>
                   <h2>Overiew- Today</h2>
                   <section class="overview-container">
                       <over-view class="arrow-up"
                                  .title="${dailyFacebook.title}"
                                  .nums="${dailyFacebook.nums}"
                                  .secondUpdate="${dailyFacebook.update}"
                                  .img="${dailyFacebook.img}"
                                  .arrow="${dailyFacebook.arrowUp}">
                       </over-view>
                       <over-view class="arrow-down"
                                  .title="${dailyFacebookLikes.title}"
                                  .nums="${dailyFacebookLikes.nums}"
                                  .secondUpdate="${dailyFacebookLikes.update}"
                                  .img="${dailyFacebookLikes.img}"
                                  .arrow="${dailyFacebookLikes.arrowDown}">
                       </over-view>
                       <over-view class="arrow-up"
                                  .title="${dailyInstagram.title}"
                                  .nums="${dailyInstagram.nums}"
                                  .secondUpdate="${dailyInstagram.update}"
                                  .img="${dailyInstagram.img}"
                                  .arrow="${dailyInstagram.arrowUp}">
                       </over-view>
                       <over-view class="arrow-up"
                                  .title="${dailyInstagramLikes.title}"
                                  .nums="${dailyInstagramLikes.nums}"
                                  .secondUpdate="${dailyInstagramLikes.update}"
                                  .img="${dailyInstagramLikes.img}"
                                  .arrow="${dailyInstagramLikes.arrowUp}">
                       </over-view>
                       <over-view class="arrow-up"
                                  .title="${dailyTwitter.title}"
                                  .nums="${dailyTwitter.nums}"
                                  .secondUpdate="${dailyTwitter.update}"
                                  .img="${dailyTwitter.img}"
                                  .arrow="${dailyTwitter.arrowUp}">
                       </over-view>
                       <over-view class="arrow-up"
                                  .title="${dailyTwitterLikes.title}"
                                  .nums="${dailyTwitterLikes.nums}"
                                  .secondUpdate="${dailyTwitterLikes.update}"
                                  .img="${dailyTwitterLikes.img}"
                                  .arrow="${dailyTwitterLikes.arrowUp}">
                       </over-view>
                       <over-view class="arrow-up"
                                  .title="${dailyYoutube.title}"
                                  .nums="${dailyYoutube.nums}"
                                  .secondUpdate="${dailyYoutube.update}"
                                  .img="${dailyYoutube.img}"
                                  .arrow="${dailyYoutube.arrowUp}">
                       </over-view>
                       <over-view class="arrow-down"
                                  .title="${dailyYoutubeLikes.title}"
                                  .nums="${dailyYoutubeLikes.nums}"
                                  .secondUpdate="${dailyYoutubeLikes.update}"
                                  .img="${dailyYoutubeLikes.img}"
                                  .arrow="${dailyYoutubeLikes.arrowDown}">
                       </over-view>
                   </section>
               </div>
           </main>
        `;
    }

    changeForDarkMode(event) {
        this.dispatchEvent(new CustomEvent('toggle-mode', {
            detail: {
                data: "dark"
            },
            bubbles: true
        }))
    }

}

window.customElements.define('social-media-app', SocialMediaApp);
