"use Client";
import { auth } from '@/auth'
import React, { useContext } from 'react'
import { SignOut } from '../components/sign-out';
import Card from '../components/card';

async function page() {
    const session = await auth()
 
  if (!session?.user) return null
  console.log(session)
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <Card user={session.user}/>
        <SignOut />
    </div>
  )
}

export default page