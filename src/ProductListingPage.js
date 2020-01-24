import React from 'react';
import { connect } from 'react-redux';

class ProductListingPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3>Product Listing Page</h3>
                <ol>
                    {this.props.products.map((product, index) => <li key={index}>{product.product_name}</li>)}
                </ol>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    debugger;
    return {
        ...state,
        products: state.products
    };
}
export default connect(mapStateToProps)(ProductListingPage);