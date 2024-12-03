"use Client";

import React from 'react'
import ListTasks from './list-tasks';



function Card({...props}) {
  return (
    <div className='relative h-[600px] w-[450px] bg-white rounded-xl overflow-hidden'>
      <div className='flex justify-around items-center p-3 h-20'>
          {props.user.image && <img src={props.user.image} alt="user-image" width={40} height={40} className='rounded-xl'/>}
          <h1 className='text-gray-900 font-bold'>{props.user.name}</h1>
          <button className='text-white bg-blue-700 rounded-md p-2'>New Task</button>
      </div>
        <ListTasks className='h-[520px] bg-slate-600 p-2'/>
    </div>
  )
}

export default Card