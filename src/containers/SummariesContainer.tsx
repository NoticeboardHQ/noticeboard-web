import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useQuery, gql } from '@apollo/client';

import { ComplaintsService, Client } from '../middleware/client.gen';

var get = require('lodash/get')

const GET_COMPLAINT_SUMMARIES = gql`
  query GET_COMPLAINT_SUMMARIES {
    complaintSummaries {
      total
      outStandingCount
      type
      trend
    }
  }
`

const GET_AVERAGE_RESPONSE_SUMMARY = gql`
  query GET_AVERAGE_RESPONSE_SUMMARY {
    averageResponseStats {
      timeTaken
      percentageDelta
      trend
    }
  }
`

interface SummaryProps {
  total: number
  outStandingCount: number
  type: string
  trend: string
}

const complaintSummaries = [
  {
    total: 4,
    outStandingCount: 3,
    type: 'Severe',
    trend: 'down'
  },
  {
    total: 8,
    outStandingCount: 2,
    type: 'Moderate',
    trend: 'up' 
  },
  {
    total: 18,
    outStandingCount: 1,
    type: 'First Time',
    trend: 'up'
  }
]

const averageResponseStats = {
  timeTaken: '10 minutes',
  percentageDelta: '+12%',
  trend: 'up'
}


function SummariesContainer() {
  const [analytics, setAnalytics] = useState()
  // const client = new Client()
  // const complaintService = new ComplaintsService(client)
  // useEffect(() => {
  //   complaintService.analytics()
  //     .then((data: any) => {
  //       console.log('data', data)
  //       // setAnalytics(data)
  //     })
  // }, [])

  // const {
  //   loading: loadingComplaintSummaries,
  //   error: errorComplaintSummaries,
  //   data: { complaintSummaries } = {}
  // } = useQuery(GET_COMPLAINT_SUMMARIES)
  
  // const {
  //   loading: loadingAverageSummary,
  //   error: errorLoadingAverageResponseSummary,
  //   data: { averageResponseStats } = {}
  // } = useQuery(GET_AVERAGE_RESPONSE_SUMMARY)

  const bgColors = {
    "Severe": "danger",
    "Moderate": "warning",
    "First Time": "success",
  }

  // if (loadingComplaintSummaries || loadingAverageSummary) return <div>'Loading...'</div>
  // if (errorComplaintSummaries || errorLoadingAverageResponseSummary) return <div>`Error! ${errorComplaintSummaries?.message}`</div>

  return (
    <Row>
      {
        complaintSummaries.map((summary: SummaryProps) => {
          const selectedBgColor = get(bgColors, summary.type) || 'light'
          return <Col sm={3}>
            <Card
                style={{border: '0px solid black'}}
                bg={ selectedBgColor }
                text={ selectedBgColor === 'light' ? 'dark' : 'white' }
              >
              <Card.Body>
                <Card.Title>
                  { summary.type }
                </Card.Title>

                <Card.Text>
                  <Row>
                    <Col sm={2}> {summary.total} </Col>
                     <Col sm={{span: 8, offset: 2}} style={{'textAlign': 'end'}}> {summary.outStandingCount} Outstanding</Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        })
      }

      <Col sm={3}>
        <Card
            style={{border: '0px solid black'}}
            bg={ 'light' }
            text={ 'dark' }
          >
          <Card.Body>
            <Card.Title>
              Average Response Time
            </Card.Title>

            <Card.Text>
              <Row>
                <Col sm={6}> {averageResponseStats.timeTaken} </Col>
                 <Col sm={{span: 4, offset: 2}} style={{'textAlign': 'end'}}> {averageResponseStats.percentageDelta} </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )

}

export default SummariesContainer

