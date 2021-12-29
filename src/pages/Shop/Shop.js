import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Product from '../../components/Product/Product';
import Products from '../../components/Products/Products';
import {popularProducts} from '../../data';


const Shop = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    console.log(cat);

    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }
    console.log(filters);
    return (
        <Container>
            <Row className="py-5">
                <Col md={6}>
                    <form>
                        <select name="size" onChange={handleFilter} id="">
                            <option>size</option>
                            <option value="s">s</option>
                            <option value="m">m</option>
                            <option value="l">l</option>
                        </select>
                        <select name="color" onChange={handleFilter} id="">
                            <option>color</option>
                            <option value="red">red</option>
                            <option value="green">green</option>
                            <option value="Blue">Blue</option>

                        </select>
                    </form>
                </Col>
                <Col md={6}>
                    <form>
                        <select onChange={(e) => setSort(e.target.value) }>
                            <option value="">sort products</option>
                            <option value="">New</option>
                            <option value="">featured</option>
                            <option value="">price descending</option>
                        </select>
                        
                    </form>
                </Col>
            </Row>
            {/* <Row>
                {
                    popularProducts.map(product => 
                        <Product 
                            key={product.id}
                            product={product}
                        ></Product>
                    )
                }
            </Row> */}
            <Products cat={cat} filters={filters} sort={sort} />
        </Container>
    );
};

export default Shop;