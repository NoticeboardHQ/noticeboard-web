import React, { useState, useEffect } from 'react'
import { Button, Dropdown, Modal } from 'react-bootstrap'

import { AssignComplaintModalProps, ComplaintProps } from './interfaces'

const staff = [
  { name: 'Benjamin Vuzu' },
  { name: 'Charlotte Venter' }
]

const AssignComplaintModal = ({ showModal, onHide, complaint }: AssignComplaintModalProps) => {
  const handleAssignStaffMember = (name: string) => {
    console.log(name)
    onHide()
  }

  return <Modal show={showModal} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title> {`Assign No ${complaint?.tenantNumber}'s Complaint` } </Modal.Title>
    </Modal.Header>
      <Modal.Body>
        { complaint?.message }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}> Cancel </Button>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Assign To
          </Dropdown.Toggle>

          <Dropdown.Menu>
            { staff.map(member => <Dropdown.Item onClick={ () => handleAssignStaffMember(member.name) }> { member.name } </Dropdown.Item>) }
          </Dropdown.Menu>
        </Dropdown>
      </Modal.Footer>
  </Modal>
}

export default AssignComplaintModal
