import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const {link, links, setLinks } = props
    const navigate = useNavigate();


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
        navigate(0);
    }

    return (
        <div className='py-4 p-6 shadow border border-neutral-400 rounded space-y-2'>
            <a href={link.url} className="text-cyan-500 line-clamp-1">{link.url}</a>
            <p className='break-words whitespace-normal line-clamp-3'>{link.description}</p>
            <div className='flex gap-40'>
                <p className='font-mono'>{link.date_added}</p>
                <div className='flex gap-1'>
                    <Link to={`/edit`} state={{ link }}>
                        <Icon icon="fluent:edit-28-filled" width="25" height="25"  
                        className='text-yellow-700 rounded-full bg-slate-300 
                        mb-1 p-1 cursor-pointer hover:shadow hover:shadow-slate-500 hover:bg-slate-50'
                        />
                    </Link>
                    <Icon icon="pajamas:remove" width="25" height="25"  
                    className='text-rose-600 rounded bg-slate-300 mb-1 p-1 
                    cursor-pointer hover:shadow hover:shadow-slate-500 hover:bg-slate-50'
                    onClick={ () => deleteLink(link.id) }/>
                </div>
            </div>
        </div>
    )
}

export default Card