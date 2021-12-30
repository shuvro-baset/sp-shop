import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import {categories} from '../../data';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            console.log("alkdsf");
            try {
                const res = await axios.get("http://localhost:5000/api/products/"
                    )
                    console.log(res.data);
                    setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProducts();
    }, []);


    return (
        <Container>
            <Row>
                {
                    products.map(product => 
                        <Product 
                            key={product._id}
                            product={product}
                        ></Product>
                    )
                }
            </Row>
        </Container>
    );
};

export default Products;