import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Product = ({product}) => {
    return (
        <Col md={4} >
            <img className="img-fluid" src={product.img} alt="" />
            <h5>{product.title}</h5>
            <Link to={`/product/${product._id}`}><button>shop</button></Link>
        </Col>
    );
};

export default Product;