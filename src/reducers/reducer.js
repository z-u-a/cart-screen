const intialState = {
    products: [{ "id": "1", "product": "shirt ", "qty": 5 }, { "id": "2", "product": "hat ", "qty": 50 }, { "id": "3", "product": "cap ", "qty": 50 }], cartedProducts: []
}

function reducer(state = intialState, action) {
    if (action.type === "ADD_TO_CART") {
        let localCartedProducts = [...state.cartedProducts];
        let localProducts = [...state.products];
        if (localCartedProducts.length === 0 || localCartedProducts.findIndex((product) => product.id === action.id) === -1) {
            for (let iterator = 0; iterator < localProducts.length; ++iterator) {
                if (localProducts[iterator].id === action.id) {
                    localProducts[iterator].qty > 0 ? localProducts[iterator].qty-- : alert("More quantity not available");
                    localCartedProducts.push({ ...localProducts[iterator] });
                    localCartedProducts[localCartedProducts.length - 1].qty = 1;
                    break;
                }
            }

        } else {
            let productFoundAt = 0;
            for (let iterator = 0; iterator < localCartedProducts.length; ++iterator) {
                if (localCartedProducts[iterator].id === action.id) {
                    productFoundAt = localProducts.findIndex((product) => product.id === action.id);
                    if (localProducts[productFoundAt].qty > 0) {
                        localProducts[productFoundAt].qty--;
                        localCartedProducts[iterator].qty++
                    } else {
                        alert("More quantity not available");
                    }
                    break;
                }
            }
        }
        return {
            ...state,
            cartedProducts: localCartedProducts,
            products: localProducts
        };

    }

    else if (action.type === "RETURN_FROM_CART") {
        let localCartedProducts = [...state.cartedProducts];
        let localProducts = [...state.products];
        let productFoundInLocalProductsAt = localProducts.findIndex((product) => product.id === action.id);
        localProducts[productFoundInLocalProductsAt].qty++;
        let productFoundInLocalCartedProductsAt = localCartedProducts.findIndex((product) => product.id === action.id);
        localCartedProducts[productFoundInLocalCartedProductsAt].qty === 0 ?
            localCartedProducts.splice(productFoundInLocalCartedProductsAt, 1) :
            localCartedProducts[productFoundInLocalCartedProductsAt].qty--;

        return {
            cartedProducts: localCartedProducts,
            products: localProducts
        }
    }

    else {

        return { ...state };
    }
}

export default reducer;

