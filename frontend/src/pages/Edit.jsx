import React from 'react'
import Sidebar from '../components/Sidebar'
import Logo from "../components/Logo"
import EditForm from "../components/EditForm"
import { useLocation } from 'react-router-dom';

const Edit = () => {
    const location = useLocation();
    const { link } = location.state || {};

    return (
        <div>
            <Logo/>
            <div className='flex cols-2'>
                <Sidebar/>
                <EditForm link={link} />
            </div>
        </div>
    )
}

export default Edit