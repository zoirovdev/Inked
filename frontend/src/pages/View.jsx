import React from 'react'
import ViewForm from '../components/ViewForm'
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Logo from "../components/Logo"

const View = () => {
    const location = useLocation();
    const { link } = location.state || {};

    return (
        <div>
            <Logo/>
            <div className='flex cols-2'>
                <Sidebar/>
                <ViewForm link={link}/>
            </div>
        </div>
    )
}

export default View