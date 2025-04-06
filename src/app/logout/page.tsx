import React from 'react'

export default function Logout() {
  return (
    <div className='flex mx-auto items-center text-center'>
      <h1 className='text-2xl font-bold text-red-500'>Logout</h1>
      <p className='text-lg'>Are you sure you want to logout?</p>
      <p className='text-sm text-muted-foreground'>This will log you out of your account.</p>
      
    </div>
  )
}
