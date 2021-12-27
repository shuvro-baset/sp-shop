import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Cart = () => {
    return (
        <Container>
            <Row className="py-5">
                <Col md={8}>
                    <h2>Your Cart</h2>
                </Col>
                <Col md={4}>
                    <h2>Summary</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;