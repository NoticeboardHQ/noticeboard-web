import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './App.css';
import AnnouncementContainer from './containers/AnnouncementsContainer'
import Dashboard from './containers/Dashboard'
import Header from './containers/Header/Header'
import TabPlaceholder from './containers/TabPlaceholder'
import { faSquarePollVertical, faBullhorn, faScrewdriver } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [showSidePanel, setShowSidePanel] = useState(false)

  const handleMouseEnter = () => {
    setShowSidePanel(true)
  }

  const handleMouseExit = () => {
    setShowSidePanel(false)
  }

  return (
    <div className="App">
      <Header />
      <Tab.Container defaultActiveKey='second' transition={true}>
        <div className={ `tab-grid-container full-height max-full-width margin-0`}>
          <div
            className="tabs side-panel"
            // onMouseEnter={ handleMouseEnter }
            // onMouseLeave={ handleMouseExit }
          >
            <Nav variant='pills' className='flex-column'>
              <Nav.Item>
                <Nav.Link eventKey='first'><FontAwesomeIcon icon={faBullhorn} size="lg" />
                  { showSidePanel && ' Announcements' }
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'><FontAwesomeIcon icon={faSquarePollVertical} size="lg" />
                  { showSidePanel && ' Complaints' }
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='third'><FontAwesomeIcon icon={faScrewdriver} size="lg"/>
                  { showSidePanel && ' Settings' }
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className={ showSidePanel ? 'dashboard-screen-adjusted' : 'dashboard-screen' }>
            <Tab.Content className="full-height">
              <Tab.Pane eventKey='first'>
                <AnnouncementContainer />
              </Tab.Pane>
              <Tab.Pane eventKey="second" className="full-height">
                <Dashboard />
              </Tab.Pane>
              <Tab.Pane eventKey='third'>
                <TabPlaceholder />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  )
}

export default App;
