import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export default function page() {
  const [chat, setChat] = useState()
  return (
    <div className='flex mx-auto items-center '>
       <div>
        <Button variant="default" >New chat</Button>

       </div>
    </div>
  )
}
