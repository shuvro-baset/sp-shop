import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../actions/posts';


const AddPosts = () => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (post) setPostData(post);
    // }, [post]);

    // const clear = () => {
    //     setCurrentId(0);
    //     setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (currentId === 0) {
    //     dispatch(createPost(postData));
    //     clear();
    //     } else {
    //     dispatch(updatePost(currentId, postData));
    //     clear();
    //     }
    // };


    return (
        <Container>
            <Row>
                <Col md={8}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddPosts;