import './SocialMediaApp';

const element = document.querySelector('social-media-app');
const dark = document.createAttribute('dark');

element.addEventListener('toggle-mode', event => {
    if (!element.hasAttribute('dark')) {
        element.setAttribute('dark', dark);
        console.log(element);
    } else {
        element.removeAttribute('dark');
    }
})
