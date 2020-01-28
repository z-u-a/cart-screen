import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const intialState = {
    products: [{ "id": "1", "product": "item 1", "qty": 50 }, { "id": "2", "product": "item 2", "qty": 50 }, { "id": "3", "product": "item 3", "qty": 50 }], cartedProducts: []
}
function reducer(state = intialState, action) {
    if (action.type === "ADD_TO_CART") {
        let localCartedProducts = [...state.cartedProducts];
        let localProducts = [...state.products];

        if (localCartedProducts.length === 0 || localCartedProducts.findIndex((product) => product.id === action.id === -1)) {
            console.log("in if", localProducts.length);
            for (let iterator = 0; iterator < localProducts.length; ++iterator) {
                if (localProducts[iterator].id === action.id) {
                    localProducts[iterator].qty--;
                    console.log(localProducts[iterator]);
                    localCartedProducts.push({ ...localProducts[iterator] });
                    localCartedProducts[0].qty = 1;
                    console.log(localCartedProducts[0]);
                    break;
                }
            }

        } else {
            console.log("in else");
            let productFoundAt = 0;
            for (let iterator = 0; iterator < localCartedProducts.length; ++iterator) {
                if (localCartedProducts[iterator].id === action.id) {
                    productFoundAt=localProducts.findIndex((product) => product.id === action.id);
                    localCartedProducts[iterator].qty++;
                    localProducts[productFoundAt].qty--;
                    console.log(localProducts[productFoundAt]);
                    console.log(localCartedProducts[iterator]);
                    break;
                }
            }
        }
        return {
            cartedProducts: localCartedProducts,
            products: localProducts
        };
    }

    else {

        return { ...state };
    }
}
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));