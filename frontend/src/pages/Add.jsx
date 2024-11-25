import React from 'react'
import Sidebar from '../components/Sidebar'
import Logo from '../components/Logo'
import AddForm from '../components/AddForm'

const Add = () => {
    return (
        <div>
            <Logo/>
            <div className='flex cols-2'>
                <Sidebar/>
                <AddForm />
            </div>
        </div>
    )
}

export default Add