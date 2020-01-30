import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from "react-icons/md";
import { Grid, Row, Col } from 'react-flexbox-grid';


function ProductListingPage() {

    const products = useSelector(
        state => state.products
    );

    const dispatch = useDispatch();
    const addToCart = (event) => {
        dispatch({ type: "ADD_TO_CART", id: event.target.id });
    }
    return (
        <React.Fragment>
            <h3>Product Listing Page</h3>
            <ol>
                {products.map((product, index) => {
                    return <Grid key={index} fluid>
                        <Row >
                            <Col >
                                {product.product}
                            </Col>
                            <Col >
                                {product.qty}
                            </Col >
                            <Col id={product.id} >
                                <MdAddShoppingCart id={product.id} onClick={addToCart} />
                            </Col>
                        </Row>

                    </Grid>
                }
                )}
            </ol>
        </React.Fragment>
    );
}

export default ProductListingPage;
