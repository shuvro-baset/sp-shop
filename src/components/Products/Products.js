import React from 'react';
import {  Container, Row } from 'react-bootstrap';
import {categories} from '../../data';
import Product from '../Product/Product';

const Products = () => {
    return (
        <Container>
            <Row>
                {
                    categories.map(product => 
                        <Product 
                            key={product.id}
                            product={product}
                        ></Product>
                    )
                }
            </Row>
        </Container>
    );
};

export default Products;