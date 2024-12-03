import React from 'react'

type Task = {
    id:number;
    title:string;
    desc:string;
    status:boolean;
    createdAt:string;
  }
function ListTasks({...props}) {
  return (
    <ul {...props}> 
        <li className='m-2 bg-slate-900 rounded-md p-2'>
            <span className='flex justify-between'>
            <span >
                <h2 className='font-bold'>setup next project</h2>
                <p>create next project and implent auth.js library</p>
            </span>
            <input type="checkbox" name="done"/>
            </span>
            <hr />
            <span>Today 10:00-12:30</span>
        </li>
    </ul>
  )
}

export default ListTasks