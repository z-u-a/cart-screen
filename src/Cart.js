import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MdRemoveShoppingCart } from "react-icons/md";

function CartPage() {
    const cartedProducts = useSelector(
        state => state.cartedProducts
    );
    const dispatch = useDispatch();
    const returnFromCart = (event) => {
        event.target.id ? dispatch({ type: "RETURN_FROM_CART", id: event.target.id }) : alert("Please click again");
    }
    return (
        <React.Fragment>
            <h3>Cart</h3>
            <ol>
                {cartedProducts.map((product, index) => {
                    return <Grid key={index} fluid>
                        <Row >
                            <Col >
                                {product.product}
                            </Col>
                            <Col >
                                {product.qty}
                            </Col>
                            <Col id={product.id}>
                                <MdRemoveShoppingCart id={product.id} onClick={returnFromCart} />
                            </Col>
                        </Row>
                    </Grid>
                }
                )}
            </ol>
        </React.Fragment>
    );
}


export default CartPage;