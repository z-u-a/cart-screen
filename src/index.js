import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const intialState = {
    products: [{ "id": "1" ,"product": "item 1", "qty": 50 }, { "id":"2", "product": "item 2", "qty": 50 }, { "id":"3", "product": "item 3", "qty": 50 }],
    cartedProducts: []
}
function reducer(state = intialState, action) {
    if (action.type === "ADD_TO_CART") {
        let localCartedProducts = [...state.cartedProducts];
        let localProducts = [...state.products];
        if (localCartedProducts.length === 0) {
            let productFound = localProducts.find( async (product) => product.id === action.id ? product:"");
            localCartedProducts.push(productFound);
        } else {
            for (let iterator=0;iterator<localCartedProducts.length;++iterator) {
                if (localCartedProducts[iterator].id === action.id) {
                    localCartedProducts[iterator].qty++;
                }
            }
        }

        for (let iterator=0;iterator<localProducts.length;++iterator) {
            if (localProducts[iterator].id === action.id) {
                localProducts[iterator].qty--;
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