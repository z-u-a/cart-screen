import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { GiReturnArrow } from "react-icons/gi";

function CartPage () {
    const cartedProducts = useSelector(
        state => state.cartedProducts
    );

    const returnFromCart = () => {
        dispatchEvent({type: "RETURN_FROM_CART"});
    }
    return (
        <React.Fragment>
            <h3>Cart</h3>
            <ol>
                {cartedProducts.map((product, index) =>
                    <Grid key={index} fluid>
                        <Row >
                            <Col>
                                <li key={index}>{product.product}</li>
                            </Col>
                            <Col>
                                {index}>{product.qty}
                            </Col>
                            <Col>
                                <GiReturnArrow onClick={returnFromCart} />
                            </Col>
                        </Row>

                    </Grid>
                )}
            </ol>
        </React.Fragment>
    );
}


export default CartPage;