import React from 'react';
import ProductListingPage from './ProductListingPage';
import CartPage from './Cart';


const App = () => {
    return (
        <React.Fragment>
            <ProductListingPage />
            <CartPage />
        </React.Fragment>
    );
};

export default App;