import React from 'react'
import {
  Col,
  Placeholder
} from 'react-bootstrap';

const TabPlaceholder = () => {
  return <div className="tab-content full-height">
    <Col md={{ span: 4, offset: 4 }}>
      <h3> Page Under Construction </h3>
      <Placeholder md={4} />
      <Placeholder md={7} />
      <Placeholder md={4} />
      <Placeholder md={4} />
      <Placeholder md={6} />
      <Placeholder md={8} />
    </Col>
  </div>
}

export default TabPlaceholder
