import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Product = ({product}) => {
    return (
        <Col md={4} >
            <img className="img-fluid" src={product.img} alt="" />
            <h5>{product.title}</h5>
            <button>shop</button>
        </Col>
    );
};

export default Product;