import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddForm = () => {
    const [newLink, setNewLink] = useState({
        url:'',
        description:'',
    })
    const navigate = useNavigate();


    const handleAddLink = async (newLink) => {
        
        const url = "http://127.0.0.1:5000/api/links";

        const response = await fetch(url, {
            method:"POST",
            body:JSON.stringify({...newLink}),
            headers: { 'Content-Type': 'application/json' } 
        })

        if(!response.ok)
            throw new Error(`Request status: ${response.status}`)

        const json = await response.json()
        setNewLink({url:'', description:''})
        navigate("/")
    };
    
    
    return (
        <div className='p-4'>
            <div className='flex space-x-64 ml-12 mt-12 p-8'>
                <label htmlFor="url" className='font-mono text-lg mt-2'>Url</label>
                <input type="url" value={newLink.url} id="url" onChange={(e) => setNewLink({...newLink, url:e.target.value})} 
                className='text-lg p-2 w-full rounded border border-slate-300 outline-none shadow-inner'/>
            </div>
            <hr/>
            <div className='flex gap-44 ml-12 mt-12 p-8'>
                <label htmlFor="description" className='font-mono text-lg mt-2'>Description</label>
                <textarea cols={60} id="description" rows={5} value={newLink.description} onChange={(e) => setNewLink({...newLink, description:e.target.value})}
                className='text-lg p-2 rounded border border-slate-300 outline-none shadow-inner'/>
            </div>
            <hr/>
            <br />
            <div className='grid grid-cols-2 divide-x-3 pt-4 pb-6 ml-48'>
                <button className='w-20 ml-8 mr-8'></button>
                <button className='bg-green-300 border border-green-800 hover:bg-green-400 w-20 font-mono text-lg rounded ml-32'
                onClick={() => {
                    handleAddLink(newLink)
                }}>Add</button>
            </div>
        </div>
    )
}

export default AddForm