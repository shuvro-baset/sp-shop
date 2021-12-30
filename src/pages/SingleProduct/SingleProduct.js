import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { publicRequest } from '../../requestMethods';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    console.log(id);
    useEffect(()=> {
        console.log(publicRequest);
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err.message);
            }
        };
        getProduct();
    }, [id])

    return (
        <Container>
            <Row className="py-5">
                <Col md={6}>
                    <img className="img-fluid" src={product.img} alt="" />
                </Col>
                <Col md={6}>
                    <h5> {product.title} </h5>
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