import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const { link } = props

    return (
        <div className='py-4 p-6 shadow border border-neutral-400 rounded space-y-2 '>
            <a href={link.url} className="text-cyan-500 line-clamp-1">{link.url}</a>
            <p className='h-24 whitespace-normal line-clamp-4'>{link.description}</p>
            <div className='flex gap-48'>
                <p className='font-mono pt-1'>{link.date_added}</p>
                    
                <Link to={`/view`} state={{ link }}>
                    <Icon icon="mdi:view-week" width="30" height="30" 
                    className='p-1 text-slate-950 shadow border border-neutral-400 rounded hover:bg-slate-300 cursor-pointer'/>
                </Link>
            </div>
        </div>
    )
}

export default Card