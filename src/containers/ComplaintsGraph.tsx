import React, { ReactElement, useState } from 'react'
import { Row } from 'react-bootstrap'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

var get = require('lodash/get')

const dataSource = {
  'daily' : [
    {
      'name': 'Sun',
      'total' : 2
    },
    {
      'name': 'Mon',
      'total' : 3
    },
    {
      'name': 'Tues',
      'total' : 4
    },
    {
      'name': 'Wed',
      'total' : 2
    },
    {
      'name': 'Thu',
      'total' : 5
    },
    {
      'name': 'Fri',
      'total' : 4
    },
    {
      'name': 'Sat',
      'total' : 1
    }
  ],
  'past_7_weeks' : [
    {
      'name': '7w ago',
      'total' : 12
    },
    {
      'name': '6w ago',
      'total' : 3
    },
    {
      'name': '5w ago',
      'total' : 14
    },
    {
      'name': '4w ago',
      'total' : 9
    },
    {
      'name': '3w',
      'total' : 11
    },
    {
      'name': '2w ago',
      'total' : 15
    },
    {
      'name': 'last week',
      'total' : 7
    },
    {
      'name': 'this week',
      'total' : 1
    }
  ],
  'yearly' : [
    {
      'name': 'Dec',
      'total' : 20
    },
    {
      'name': 'Nov',
      'total' : 31
    },
    {
      'name': 'Jan',
      'total' : 14
    },
    {
      'name': 'Feb',
      'total' : 22
    },
    {
      'name': 'Mar',
      'total' : 35
    },
    {
      'name': 'Apr',
      'total' : 19
    },
    {
      'name': 'May',
      'total' : 13
    },
    {
      'name': 'Jun',
      'total' : 11
    },
    {
      'name': 'Jul',
      'total' : 12
    },
    {
      'name': 'Aug',
      'total' : 15
    },
    {
      'name': 'Sep',
      'total' : 14
    },
    {
      'name': 'Oct',
      'total' : 11
    },
    {
      'name': 'Nov',
      'total' : 10
    },
  ]
}


const ComplaintsGraph = (): ReactElement => {
  const [complaintsDataSource, setComplaintsDataSource] = useState(dataSource['daily'])

  const onSelectTimeFrame = (timeframe: string) => {
    setComplaintsDataSource(get(dataSource, timeframe))
  }

  return <div className='graph'>
    <Row> <h6> Complaints Received </h6></Row>
    <ResponsiveContainer width="100%" height="100%" minHeight="300px">
      <BarChart
        width={500}
        height={300}
        data={complaintsDataSource}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#5541D7" />
      </BarChart>
    </ResponsiveContainer>
  </div>
}

export default ComplaintsGraph
