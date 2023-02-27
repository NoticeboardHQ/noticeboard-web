import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { ReactComponent as Logo }  from '../../logo.svg'

const Header = () => {
    return <Navbar bg="white" className="grey-border-bottom">
      <Container className="">
        <Navbar.Brand href="/">
            <Logo style={{ width: 30, height: 30}}/>
             {' '}
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