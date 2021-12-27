import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const SingleProduct = () => {
    return (
        <Container>
            <Row className="py-5">
                <Col md={6}>
                    <img className="img-fluid" src="https://i.ibb.co/XsdmR2c/1.png" alt="" />
                </Col>
                <Col md={6}>
                    <h5> Product Title</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid facilis itaque aspernatur a totam libero ex dignissimos harum fugit neque!</p>
                    <h6>Price: $75</h6>
                    <div>
                        <form>
                            <select name="" id="">
                                <option value="">sort products</option>
                                <option value="">New</option>
                                <option value="">featured</option>
                                <option value="">price descending</option>
                            </select>
                        </form>
                    </div>
                    <div>
                        <button>+</button> <button>-</button>
                    </div>
                    <button>add to cart</button>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleProduct;