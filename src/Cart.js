import React from 'react';
import { connect } from 'react-redux';

class CartPage extends React.Component {
    render() {
        debugger;
        return (
            <React.Fragment>
                <h3>Cart</h3>
                <ol>
                    {this.props.cartedProducts.map((cartedProduct, index) => <li key={index}>{cartedProduct.product_name}</li>)}
                </ol>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    debugger;
    return {
        ...state,
        cartedProducts: state.cartedProducts
    };
}

export default connect(mapStateToProps)(CartPage);