import { environment } from 'src/environments/environment';

export const baseURL = '/assets/json';

export const rout = {
    webSite: {
        home: 'home',
        orders: 'orders',
        ordersDetails: 'ordersDetails',
        
    },
    Api: {
        products: {
            List: "/porducts.json",
            Create: '/porducts.json',
            Update: '/porducts.json',
            Delete: '/porducts.json',
        },
        orders: {
            List: "/orders.json",
            Create: '/orders.json',
            Update: '/orders.json',
            Delete: '/orders.json',

        },
    },
};
