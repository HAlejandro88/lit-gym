import './SocialMediaApp';

const element = document.querySelector('social-media-app');
const dark = document.createAttribute('dark');

element.addEventListener('toggle-mode', event => {
    if (element.hasAttributes('dark')) {
        element.removeAttribute('dark');
    } else {
        element.setAttribute('dark', dark);
    }
})
