import React from 'react'
import { Icon } from '@iconify/react';


const Sidebar = () => {
  return (
    <div className='grid grid-rows-2 gap-0.8 h-full w-48 flex-shrink-0 shadow-md rounded-br py-1 items-center mr-4'>
        <div className='flex hover:bg-slate-300'>
            <Icon icon="lucide:home" width="40" height="40"  className='text-black py-2 ml-2'/>
            <a href='/' className='py-2 pl-3 pr-8'>Home</a>
        </div>

        <div className='flex hover:bg-slate-300'>
            <Icon icon="gridicons:add" width="40" height="40"  className='text-black p-2 ml-2'/>
            <a href='/add' className='py-2 pl-3 pr-8'>Add</a>
        </div>
    </div>
  )
}

export default Sidebar