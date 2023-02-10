import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './App.css';
import Dashboard from './containers/Dashboard'
import Header from './containers/Header/Header'
import { faSquarePollVertical, faBullhorn, faScrewdriver } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <Header />
      <Tab.Container defaultActiveKey='second'>
        <Row className="full-height max-full-width">
          <Col sm={1} className="tabs">
            <Nav variant='pills' className='flex-column'>
              <Nav.Item>
                <Nav.Link eventKey='first'><FontAwesomeIcon icon={faBullhorn} size="xl" /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'><FontAwesomeIcon icon={faSquarePollVertical} size="xl" /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='third'><FontAwesomeIcon icon={faScrewdriver} size="xl"/></Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={11}>
            <Tab.Content className="full-height">
              <Tab.Pane eventKey='first'>
                This is another thing
              </Tab.Pane>
              <Tab.Pane eventKey="second" className="full-height">
                <Dashboard />
              </Tab.Pane>
              <Tab.Pane eventKey='third'>
                This is another thing
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default App;
