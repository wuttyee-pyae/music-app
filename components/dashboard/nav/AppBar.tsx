import { BackIcon } from '@/components/desktop/music/icons/BackIcon'
import React from 'react'

export const AppBar = () => {
  return (
    <div className='flex flex-row full text-white p-4 items-center gap-4 bg-black'>
        <div>
            <BackIcon/>
        </div>
        <div className='w-full justify-center'>
          <p className='text-white text-center'>Page Name</p></div>
        <div className='flex justify-end'>Update</div>
    </div>
  )
}
