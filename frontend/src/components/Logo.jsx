import React from 'react'
import logoPng from "../assets/logo.png"


const Logo = () => {
  return (
    <div className='h-14 shadow'>
        <div className='flex space-x-2'>
            <img src={logoPng} className='object-scale-down h-10 w-10 mt-2 ml-2'/>
            <p className='font-mono text-2xl pt-3'>Inked</p>
        </div>
    </div>
  )
}

export default Logo