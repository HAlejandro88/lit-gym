import { Router } from '@vaadin/router';


const routes = [
    {
        path: '',
        component: 'book-app',
        action: async () => await import('./BookApp')
    },
    {
        path: 'contactList',
        component: 'contact-list',
        action: async() => await import('./components/ContactList')
    },
    {
        path: '(.*)',
        component: 'not-found-page',
        action: async() => await import ('./components/NotFoundPage')
    }
];


const app = document.getElementById('root');
export const router = new Router(app);

router.setRoutes(routes);
