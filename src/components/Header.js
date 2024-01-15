import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Header() {
    
  return (
    <div>
         <Navbar  expand="lg">
      <Container className='px-5' fluid>
        <Navbar.Brand className='text-white fs-2' href="#">Binary Blooms</Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            

            <Dropdown className='ms-5'>
      <Dropdown.Toggle variant="outline-secondary" className='border-0 rounded-4 text-white ' id="dropdown-basic">
      iOS
      </Dropdown.Toggle >
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className='ms-2'>
      <Dropdown.Toggle variant="outline-secondary" className='border-0 rounded-4 text-white ' id="dropdown-basic">
      Android
      </Dropdown.Toggle >
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className='ms-2'>
      <Dropdown.Toggle variant="outline-secondary" className='border-0 rounded-4 text-white ' id="dropdown-basic">
        Web
      </Dropdown.Toggle >
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className=' bg-transparent border-0'><i class="fa-solid fa-magnifying-glass" style={{color: '#ffffff;'}}></i></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
    </div>
  )
}

export default Header