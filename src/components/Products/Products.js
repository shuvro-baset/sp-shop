import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import {categories} from '../../data';
import Product from '../Product/Product';

const Products = ({cat, filters, sort}) => {
    console.log(cat, filters, sort);
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products")
            } catch (err) {}
        };
    }, [cat])
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