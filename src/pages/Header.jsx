import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { search } from '../slice/FoodSlice'
import { useDispatch } from 'react-redux'

function Header() {
  const dispatch =useDispatch()
  return (
    <div>
        <Navbar className="bg-body-dark">
    <Container>
      <Navbar.Brand>
        <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>
        <i class="fa-solid fa-pot-food" style={{color:'BLUE'}} ></i> FOOD  <span style={{color:'BLUE'}}>BUCKET.</span>
        <input onChange={(e)=>dispatch(search (e.target.value))} style={{marginLeft:'600px'}} className='fs-5 w-25' type="text" placeholder='Enter neighborhood' />
      </Link>

      </Navbar.Brand>
    </Container>
  </Navbar>
    </div>
  )
}

export default Header