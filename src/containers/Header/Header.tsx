import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
    return <Navbar bg="white" className="grey-border-bottom">
      <Container className="">
        <Navbar.Brand href="/">
            <img 
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            /> {' '}
            Noticeboard
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
}

export default Header