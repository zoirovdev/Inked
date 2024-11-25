import React from 'react'
import Sidebar from '../components/Sidebar'
import Logo from "../components/Logo"
import List from '../components/List'


const Home = ({links, setLinks }) => { 
    return (
        <div>
            <Logo/>
            <div className='flex cols-2'>
                <Sidebar/>
                <List links={links} setLinks={setLinks} />
            </div>
        </div>
    )
}

export default Home