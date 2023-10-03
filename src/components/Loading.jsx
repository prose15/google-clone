import React from 'react'
import { Rings } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
       <Rings color="#FF0000" height={80} width={80} />
    </div>
  )
}
