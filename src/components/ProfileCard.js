import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FiFileText } from 'react-icons/fi'

const ProfileCard = () => {

    return (
        <div className='d-flex flex-wrap'  >
            <Card style={{
                width: '100%', borderColor: 'white',
                height: '100%'
            }}>
                <Card.Img variant="top" style={{ borderRadius: '50%', height: '8rem', width: '8rem', margin: 'auto', marginTop: '3rem' }} src="https://media.istockphoto.com/id/639805094/photo/happy-man.jpg?s=612x612&w=0&k=20&c=REx0Usczge4a0soQvp7fQgGCcFMHeORGUTpOIPW-IYA=" />
                <Card.Body>
                    <Card.Title className='display-6' style={{ textAlign: 'center', fontWeight: 'bold' }}>Coop Cooper</Card.Title>
                    <Card.Text style={{ textAlign: 'center', color: 'grey' }}> cooper@mock.com</Card.Text>
                    <Card.Text >
                        <Row>
                            <Col xs={6} style={{ textAlign: 'center' }}><p style={{ fontSize: '2rem', marginBottom: '1px', borderRight: '1px solid grey' }}>16</p><p style={{ color: 'grey', fontSize: '0.9rem', borderRight: '1px solid grey' }}>Past</p></Col>
                            <Col xs={6} style={{ textAlign: 'center' }}><p style={{ fontSize: '2rem', marginBottom: '1px' }}>16</p><p style={{ color: 'grey', fontSize: '0.9rem' }}>Upcoming</p></Col>
                        </Row>
                    </Card.Text>
                    <div className='d-flex justify-content-center'  >
                        <Button style={{ color: 'black', width: '100%', fontSize: '1.5rem', borderColor: 'rgb(210,210,210)', borderWidth: '1px' }} className='mx-2 my-3 py-1 ' variant="outline-secondary">Send Message</Button>
                    </div>

                    <Card.Text style={{ fontSize: '2rem' }} className='mt-3'> Files/Text</Card.Text>
                    {
                        ['Checkup results.pdf', 'Test results.pdf', 'Medical Records.pdf', 'Dental X-Rays.pdf'].map(x => (
                            <div key={x} className='d-flex justify-content-end'  >
                                <Button style={{ color: 'grey', textAlign: 'left', borderColor: 'whitesmoke', width: '100%', fontSize: '1.2rem', backgroundColor: 'whitesmoke' }} className='mx-2  my-2 py-1' ><FiFileText className='me-4 ms-4' />{x}</Button>
                            </div>
                        ))
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProfileCard