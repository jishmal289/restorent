import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard({restaurant}) {
  return (
            <div>
            <Link to={`/restaurent_view/${restaurant.id}`} style={{textDecoration:'none'}}>
            <Card style={{ width: '100%', height:'50%' }}>
            <Card.Img variant="top" src={restaurant.photograph}/>
            <Card.Body>
            <Card.Title className='text-center text-primary'>{restaurant.name}</Card.Title>
            <hr />
            <div className='d-flex justify-content-between'>
                <h6>{restaurant.neighborhood}</h6>
                <h6>{restaurant.cuisine_type}</h6>
            </div>
            </Card.Body>
            </Card>
            </Link>
            </div>
  )
}

export default Restcard