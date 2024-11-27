import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const ViewForm = ({link}) => {

    
    const deleteLink = async (id) => {
        const url = "http://127.0.0.1:5000/api/links"

        const response = await fetch(url+`/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        })

        if (!response.ok)
            throw new Error(`Response status: ${response.status}`)

        const json = await response.json()
        navigate('/');
    }

    
    return (
        <div className='p-4 mt-6 ml-6'>
            <a href={link.url} target='_blank' 
               className='px-8 py-2 rounded border border-cyan-400 hover:bg-slate-100'>{link.url}</a>
            <p className='px-8 py-4 mr-80 mt-12 border-x border-cyan-400'>{link.description}</p>

            <div className='flex space-x-80'>
                <p className='pl-8 py-1 w-48 mt-8 border-b border-cyan-400'>{link.date_added}</p>
                <div className='flex space-x-1 pt-8'>
                    <Link to={`/edit`} state={{ link }} 
                    className='flex rounded py-1 cursor-pointer border border-cyan-400 hover:bg-slate-100'>
                        <Icon icon="fluent:edit-28-filled" width="30" height="26"  
                        className='text-yellow-700 py-1'/>
                        <p className='pr-2'>Edit</p>
                    </Link>
                    <div className='flex rounded py-1 cursor-pointer border border-cyan-400 hover:bg-slate-100'>
                        <Icon icon="pajamas:remove" width="30" height="26"  
                        className='text-rose-600 py-1'
                        onClick={ () => deleteLink(link.id) }/>
                        <p className='pr-2'>Delete</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewForm