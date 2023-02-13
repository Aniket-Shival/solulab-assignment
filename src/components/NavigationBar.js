import React from 'react';
import { AiOutlineLineChart, AiOutlinePlus, AiOutlineFolderOpen } from 'react-icons/ai'
import { BsPeopleFill } from 'react-icons/bs'
import { TbFileUpload, TbReportMedical, TbSettings } from 'react-icons/tb'
import { FiLogOut } from 'react-icons/fi'



const NavigationBar = () => {

    const sideNav = [
        {
            id: '1',
            name: 'data',
            icon: <AiOutlineLineChart />
        },
        {
            id: '2',
            name: 'new',
            icon: <AiOutlinePlus />
        },
        {
            id: '3',
            name: 'patient',
            icon: <BsPeopleFill />
        },
        {
            id: '4',
            name: 'folder',
            icon: <AiOutlineFolderOpen />
        },
        {
            id: '5',
            name: 'upload',
            icon: <TbFileUpload />
        },
        {
            id: '6',
            name: 'report',
            icon: <TbReportMedical />
        },
        {
            id: '7',
            name: 'setting',
            icon: <TbSettings />
        },
        {
            id: '8',
            name: 'logout',
            icon: <FiLogOut />
        },
    ]

    return (
        <>
            <div style={{ backgroundColor: 'white', display: 'inline-block', position: 'fixed', borderRight: '1px solid rgb(210,210,210)' }}>

                <ul style={{ minHeight: 'calc(100vh-50px)', height: 'calc(100vh-50px)', width: ' calc(100vh/8)', paddingLeft: '0px' }} className='d-flex-column justify-content-center '>
                    {sideNav.map(x => (
                        <li style={{ textDecoration: 'none', height: ' calc(100vh/8)', width: ' calc(100vh/8)' }} className='d-flex text-center align-items-center justify-content-center sidenavhover' key={x.id}>
                            <div>
                                <span style={{ fontSize: ' calc(100vh/16)', display: 'block' }}>{x.icon}</span>
                                <span style={{ textAlign: 'center' }} className='mb-4 mx-1' >{x.name}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default NavigationBar