import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/*let cartFromLocalStorage = JSON.parse(localStorage.getItem('cartItems'));

if (localStorage.hasOwnProperty('cartItems') === null || undefined) {
    cartFromLocalStorage = [];
}

if (localStorage.hasOwnProperty('cartItems') === null) {
    console.log('Item does NOT exist in localstoarge');
} else {
    console.log('Item exists in localstorage');
}

let cartFromLocalStorage =
    localStorage.getItem('cartItems') === null || undefined
        ? []
        : localStorage.getItem('cartItems');
*/

if (localStorage.hasOwnProperty('cartItems') === null) {
    localStorage.setItem(
        'cartItems',
        JSON.stringify({
            cart: [],
            totalPrice: 0,
        })
    );
}

//localStorage.setItem('cartItems', JSON.stringify({ cart: [], totalPrice: 0 }));
let cartFromLocalStorage = JSON.parse(localStorage.getItem('cartItems'));

export const initialState = {
    cart: [],
    totalPrice: 0,
};

function cartReducer(state = cartFromLocalStorage || initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            localStorage.setItem('cartItems', JSON.stringify(state.cart));
            return {
                ...state,
                cart: [...state.cart, action.payload],
                totalPrice: state.totalPrice + action.payload.price,
            };
        case 'REMOVE_ITEM':
            const removedItem = action.payload;
            const newTotalPrice = state.totalPrice - removedItem.price;
            return {
                ...state,
                cart: state.cart.filter(
                    (product) => product.id !== removedItem.id
                ),
                totalPrice: newTotalPrice,
            };
        case 'CLEAR_ITEMS':
            localStorage.clear();
            return {
                ...state,
                cart: [],
                totalPrice: 0,
            };
        default:
            return state;
    }
}

const store = createStore(cartReducer, composeWithDevTools());
store.subscribe(() => {
    localStorage.setItem('cartItems', JSON.stringify(store.getState()));
});

export default store;
