import React, { useState } from 'react'
import {
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
  Spinner,
  Row,
  Toast,
  ToastContainer
} from 'react-bootstrap'

import {
  Announcement,
  BroadcastAnnouncementRequest,
  Client,
  NotificationService
} from '../middleware/client.gen';

const client = new Client()
const notificationService = new NotificationService(client)

const AnnouncementsContainer = () => {
  const [announcement, setAnnouncement] = useState('')
  const [postingAnnouncement, setPostingAnnouncement] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [announcements, setAnnouncements] = useState<Announcement[]>([])

  const handleAnnouncementChange = (event: any) => {
    const userAnnouncement = event.target.value as string
    setAnnouncement(userAnnouncement)
  }

  const handleSubmit = () => {
    const broadcast = new BroadcastAnnouncementRequest({
      subject: 'noise',
      message: announcement
    })
    setPostingAnnouncement(true)
    notificationService.broadcastAnnouncement(broadcast).then((broadcast) => {
      setShowToast(true)
      setPostingAnnouncement(false)
      setAnnouncement('')
    })
  }

  notificationService.listAnnouncements().then(announcementsResponse => {
    setAnnouncements(announcementsResponse.announcements ?? [])
  })

  const disableSubmit = announcement.length < 1

  return <div className="tab-content">
    <ToastContainer position={ 'top-end' }>
      <Toast
        autohide
        show={showToast}
        onClose={() => setShowToast(false)}
        bg='light'
      >
        <Toast.Header closeButton={false}>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Horay</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>Successfuly sent out broadcast</Toast.Body>
      </Toast>
    </ToastContainer>

    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <Form>
          <Form.Group className="mb-3">
            <FloatingLabel controlId="floatingTextarea2" label="Write an announcement here">
              <Form.Control
                as="textarea"
                placeholder="Write an announcement here"
                style={{ height: '150px' }}
                value={ announcement }
                onChange={ handleAnnouncementChange }
                required
              />
            </FloatingLabel>
          </Form.Group>
          <Button variant="primary" onClick={ handleSubmit } disabled={ disableSubmit }>
            { 
              postingAnnouncement
              ? <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              : 'Submit'
            }
          </Button>
        </Form>
      </Col>
    </Row>

    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        <h5 style={{margin: "15px"}}> Previous Announcements</h5>
        { 
          announcements.map((broadcast : Announcement) => <Card style={{ borderRadius: "0"}}>
            <Card.Body style={{  }}>
              <Card.Title> Carmicheal The Caretaker  </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{ broadcast.subject } </Card.Subtitle>
              <Card.Text>
                { broadcast.message }
              </Card.Text>
            </Card.Body>
          </Card>)
        }
      </Col>
    </Row>
  </div>
}

export default AnnouncementsContainer
