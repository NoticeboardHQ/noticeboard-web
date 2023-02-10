import React from 'react'
import { Col } from 'react-bootstrap'

import SummariesContainer from './SummariesContainer'
import ComplaintsTable from './ComplaintsTable'
import ComplaintsGraph from './ComplaintsGraph'

function Dashboard() {
  return (
    <div className="dashboard full-height">
      <Col className="left-right-padding">
        <SummariesContainer />
        <ComplaintsGraph />
        <ComplaintsTable />
      </Col>
    </div>
  )
}

export default Dashboard