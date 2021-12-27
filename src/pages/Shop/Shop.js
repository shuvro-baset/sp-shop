import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../../components/Product/Product';
import {popularProducts} from '../../data';


const Shop = () => {
    return (
        <Container>
            <Row className="py-5">
                <Col md={6}>
                    <form>
                        <select name="" id="">
                            <option value="">size</option>
                            <option value="">s</option>
                            <option value="">m</option>
                            <option value="">l</option>
                        </select>
                        <select name="" id="">
                            <option value="">color</option>
                            <option value="">red</option>
                            <option value="">green</option>
                            <option value="">Blue</option>

                        </select>
                    </form>
                </Col>
                <Col md={6}>
                    <form>
                        <select name="" id="">
                            <option value="">sort products</option>
                            <option value="">New</option>
                            <option value="">featured</option>
                            <option value="">price descending</option>
                        </select>
                        
                    </form>
                </Col>
            </Row>
            <Row>
                {
                    popularProducts.map(product => 
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

export default Shop;