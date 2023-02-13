import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FiFileText } from 'react-icons/fi'



const DataCard = () => {

    const btnHover = (e) => {
        e.target.style.backgroundColor = 'white'
        e.target.style.color = 'blue'
    }
    const btnNotHover = (e) => {
        e.target.style.backgroundColor = 'whitesmoke'
        e.target.style.color = 'black'
    }
    const btnHover2 = (e) => {
        e.target.style.backgroundColor = 'white'
        e.target.style.color = 'grey'
    }
    const btnNotHover2 = (e) => {
        e.target.style.backgroundColor = 'whitesmoke'
        e.target.style.color = 'black'
    }

    const dataPerson = [
        {
            id: '1',
            title: 'Gender',
            data: 'Female',
        },
        {
            id: '2',
            title: 'Birthday',
            data: 'Feb 14th,1999',
        },
        {
            id: '3',
            title: 'Phone number',
            data: '123457689',
        },
        {
            id: '4',
            title: 'Registred Date',
            data: 'Feb 14th,1999',
        },
        {
            id: '5',
            title: 'Street Address',
            data: 'Grove Street',
        },
        {
            id: '6',
            title: 'City',
            data: 'Citypur',
        },
        {
            id: '7',
            title: 'Zip Code',
            data: '456654',
        },
        {
            id: '8',
            title: 'Member Status',
            data: 'Active Member',
        },
    ]

    const appointData = [
        {
            id: '1',
            date: "26 Feb '22",
            time: '9:00 - 10:00',
            treatment: 'Open Access',
            dentist: 'Drg. Teeth Titan',
            nurse: 'Gum Girl',
        },
        {
            id: '2',
            date: "19 Mar '22",
            time: '9:00 - 10:00',
            treatment: 'Root Canal',
            dentist: 'Drg. Teeth Titan',
            nurse: 'Gum Girl',
        },
    ]

    return (
        <div className='d-flex flex-wrap'>
            <Card style={{
                height: '100vh', width: '100%', borderColor: 'white',
            }} className=' d-flex flex-wrap'>
                <Card.Body>
                    <Card.Text className='mt-5' >
                        <Row>
                            {dataPerson.map(x => (
                                <Col key={x.id} xs={6} lg={3} className='my-2' style={{ textAlign: 'start' }}><p style={{ fontSize: '0.8rem', color: 'grey', marginBottom: '5px' }}>{x.title}</p><p style={{ borderBottom: '1px solid rgb(210,210,210)', whiteSpace: 'nowrap', fontSize: '1.1rem', paddingBottom: '1.2rem' }}>{x.data}</p></Col>
                            ))}
                        </Row>
                    </Card.Text>

                    <Card.Body  >
                        <Row style={{ width: '100%', height: '100%' }}  >
                            {
                                ['Appointment', 'Past Appointment', 'Medical Records'].map(x => (
                                    <Col xs={12} lg={3} style={{ backgroundColor: 'whitesmoke', textAlign: 'start' }}><Button style={{ color: 'black', width: '100%', fontSize: '0.8rem', backgroundColor: 'whitesmoke', borderColor: 'whitesmoke' }} className=' my-3 py-2 mx-1 ' onMouseEnter={btnHover} onMouseLeave={btnNotHover} >{x}</Button></Col>
                                ))}
                        </Row>
                    </Card.Body>

                    <Card style={{ backgroundColor: 'whitesmoke', borderColor: 'white' }} className='ps-3'>
                        <Card.Header className='d-flex justify-content-between p-2' style={{ backgroundColor: 'whitesmoke' }}>
                            <span className='mx-2 px-3 py-1' style={{ textAlign: 'start' }} onMouseEnter={btnHover2} onMouseLeave={btnNotHover2}>Root Canal Treatment</span>
                            <span className='mx-2 px-3 py-1' style={{ textAlign: 'end' }} onMouseEnter={btnHover2} onMouseLeave={btnNotHover2}>Other Medical Treatment</span>
                        </Card.Header>
                        <Card.Body style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                            {
                                appointData.map(x => (
                                    <Row style={{ width: '100%', height: '100%', backgroundColor: 'white' }} className='pt-1 pb-1 my-3 '   >
                                        <Col xs={12} lg={3} className='my-1' style={{ textAlign: 'center', borderRight: '2px solid whitesmoke' }}><h4 >{x.date}</h4><p>{x.time}</p></Col>
                                        <Col xs={12} lg={3} className='my-1' style={{ textAlign: 'center', borderRight: '2px solid whitesmoke' }}><p style={{ fontSize: '0.8rem', color: 'grey', marginBottom: '1px', marginTop: '1rem' }}>Treatment</p><p >{x.treatment}</p></Col>
                                        <Col xs={12} lg={2} className='my-1' style={{ textAlign: 'center' }}><p style={{ fontSize: '0.8rem', color: 'grey', marginBottom: '1px', marginTop: '1rem' }}>Dentist</p><p style={{ marginBottom: '0px' }}>{x.dentist}</p></Col>
                                        <Col xs={12} lg={2} className='my-1' style={{ textAlign: 'center' }}><p style={{ fontSize: '0.8rem', color: 'grey', marginBottom: '1px', marginTop: '1rem' }}>Nurse</p><p style={{ marginBottom: '0px' }}>{x.nurse}</p></Col>
                                        <Col xs={12} lg={2} style={{ textAlign: 'center' }} className=' d-flex align-items-center justify-content-center my-1'><FiFileText style={{ color: 'blue', textAlign: 'center' }} />Note</Col>
                                    </Row>
                                ))}
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DataCard