import React from 'react'
import { Button, Col, ListGroupItem, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../pages/RestReview';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

function View() {
    const [show, setShow] = useState(false);

    const { id } = useParams()
    console.log(id);

    const allrestaurants = useSelector((state) => state.foodSlice.allrestaurent)
    console.log(allrestaurants);
    const selectedRestaurant = allrestaurants.find(item => item.id == id)
    console.log(selectedRestaurant);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Row className='container'>
                <Col md={4}>
                    <img width={'100%'} height={'100%'} src={selectedRestaurant.photograph} alt="no image" />
                </Col>
                <Col md={8}>
                    <hr />
                    <h2 className='text-center'>FOOD<span className='text-primary'> BUCKET.</span> DETAILS</h2>
                    <hr />
                    <div className="container border w-100">
                        <h3 className="mt-3 text-center">{selectedRestaurant.name}</h3>
                        <ListGroup className='mt-5 p-2' variant="flush">
                            <ListGroup.Item>{selectedRestaurant.neighborhood}</ListGroup.Item>
                            <ListGroup.Item>{selectedRestaurant.cuisine_type}</ListGroup.Item>
                            <ListGroup.Item>{selectedRestaurant.address}</ListGroup.Item>
                        </ListGroup>
                        <div className=" d-flex justify-content-center mt-3">
                            <button style={{ height: '50px' }} onClick={handleShow} className='btn btn-outline-primary me-2 mb-4' >Operating Hours</button>
                            <RestReview reviews={selectedRestaurant.reviews} />
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Operating Hours</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ListGroup>
                                        <ListGroup.Item>Monday:{selectedRestaurant.operating_hours.Monday}</ListGroup.Item>
                                        <ListGroup.Item>Tuesday:{selectedRestaurant.operating_hours.Tuesday}</ListGroup.Item>
                                        <ListGroup.Item>Wednesday:{selectedRestaurant.operating_hours.Wednesday}</ListGroup.Item>
                                        <ListGroup.Item>Thursday:{selectedRestaurant.operating_hours.Thursday}</ListGroup.Item>
                                        <ListGroup.Item>Friday:{selectedRestaurant.operating_hours.Friday}</ListGroup.Item>
                                        <ListGroup.Item>Saturday:{selectedRestaurant.operating_hours.Saturday}</ListGroup.Item>
                                        <ListGroup.Item>Sunday:{selectedRestaurant.operating_hours.Sunday}</ListGroup.Item>
                                    </ListGroup>
                                </Modal.Body>
                            </Modal>
                        
                        </div>
                    </div>
                    <hr />
                </Col>

            </Row>
        </div>
    )
}

export default View