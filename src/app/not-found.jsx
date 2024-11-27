'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const NotFound = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  }

  return (
    <div className='container not-found'>
      <center><h4 className='heading-notfound'>Page Not Found 🙂</h4></center>
      <button onClick={handleBack} className='not-found-btn'>Go Back</button>
    </div>
  )
}

export default NotFound
