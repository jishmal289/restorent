import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview(props) {
  const reviews= props.reviews
  console.log(reviews);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button style={{ height: '50px' }} onClick={() => setOpen(!open)} className='btn btn-outline-danger' >Click Here To Save The Reviews</button>

      <Collapse in={open} dimension="width">
        <div>
          {reviews.map((item) => (
            <>
            <hr />
              <h6>{item.name}:{item.date}</h6>
              <p>{item.rating}</p>
              <p>{item.Comment}</p>

            </>
          ))
          }

        </div>
      </Collapse>

    </div>
  )
}

export default RestReview