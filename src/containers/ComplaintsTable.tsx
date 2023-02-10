import React, { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client';
import { Button, Table } from 'react-bootstrap';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AssignComplaintModal from './AssignComplaintModal'
import { ComplaintsService, Client } from '../middleware/client.gen';
import { ComplaintProps } from './interfaces'

const GET_COMPLAINTS = gql`
  query GET_COMPLAINTS {
    complaints {
      tenantNumber
      tenantAddress
      complaintText
      date
      time
      level
      resolved
    }
  }
`

const levelColors = ['green-box', 'orange-box', 'red-box']

function ComplaintsTable() {

  const [complaints, setComplaints] = useState([])
  const client = new Client()
  const complaintService = new ComplaintsService(client)
  const [selectedComplaint, setSelectedComplaint] = useState<ComplaintProps>()
  const [showAssignComplaintModal, setShowAssignComplaintModal] = useState(false)

  const handleComplaintButtonClicked = (complaint: ComplaintProps) => {
    setShowAssignComplaintModal(true)
    setSelectedComplaint(complaint)
  }

  useEffect(() => {
    complaintService.listComplaints()
      .then((data: any) => {
        setComplaints(data.complaints)
      })
  }, [])

  return (
    <div className='table-container'>
      <Table hover className='table' style={{'width': '100%'}}>
        <thead>
          <tr><th className="borderless">Latest Complaints</th></tr>
          <tr>
            <th className="table-header" style={{'width': "3%"}}> Tenant No. </th>
            <th className="table-header" style={{'width': "10%", 'overflowX': 'hidden'}}> Messages </th>
            <th className="table-header" style={{'width': "4%"}}> Date </th>
            <th className="table-header" style={{'width': "5%"}}> Time </th>
            <th className="table-header" style={{'width': "3%"}}> Level </th>
            <th className="center-table-items table-header" style={{'width': "3%"}}> Resolved </th>
          </tr>
        </thead>

        <tbody>
          { 
            complaints.map((complaint: ComplaintProps): any => {
              const createdAt = new Date(complaint.created_at)
              const date = createdAt.toDateString()
              const time = createdAt.toLocaleTimeString()
              complaint.tenantNumber = Math.floor(Math.random() * 1000)
              const randomColorNumber = Math.floor(Math.random() * 3)
              {/*const randomResolvedChooser = Math.floor(Math.random() * 2)*/}
              return <tr>
                <td>{complaint.tenantNumber}</td>
                <td>{complaint.message}</td>
                <td>{date}</td>
                <td>{time}</td>
                <td><div className={levelColors[randomColorNumber]}></div></td>
                <td className="center-table-items">
                  { 
                    complaint.resolved
                      ? <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} size="xl" />
                      : <Button 
                          className="light-primary rounded-border menu-text"
                          onClick={() => handleComplaintButtonClicked(complaint)}
                        > Assign </Button>
                  }
                </td>
              </tr>
            })
          }
        </tbody>
      </Table>

      <AssignComplaintModal
        onHide={() => setShowAssignComplaintModal(false)}
        showModal={showAssignComplaintModal}
        complaint={selectedComplaint}
      />
    </div>
  )
}

export default ComplaintsTable
