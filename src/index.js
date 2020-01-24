import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const intialState = {
    products: [{ "product_name": "item 1", "qty": 10 }, { "product_name": "item 2", "qty": 100 }, { "product_name": "item 3", "qty": 50 }],
    cartedProducts: []
}
function reducer(state = intialState, action) {
    debugger;
    if (action.type === "ADD_TO_CART") {
        return {
            cartedProducts: [...state.cartedProducts, state.products[0]],
            products: state.products.filter(() => state.products[0])
        };
    } else {

        return { ...state };
    }
}
const store = createStore(reducer);
store.dispatch({ type: "ADD_TO_CART" });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));