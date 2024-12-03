import React from 'react'
import { useState } from 'react'
function CreateTask() {
  return (
    <div className=''>
        <form action="">
            <input type="text" name='title'/>
            <input type="text" name='desc'/>
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default CreateTask