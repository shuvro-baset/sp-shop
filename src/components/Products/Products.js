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
            console.log("alkdsf");
            try {
                const res = await axios.get(
                    cat 
                    ? `http://localhost:5000/api/products?category=${cat}`
                    : "http://localhost:5000/api/products/"
                    )
                    console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProducts();
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