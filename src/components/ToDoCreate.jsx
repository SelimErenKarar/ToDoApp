import React from 'react'
import '../App.css'

function ToDoCreate() {
    return (
        <div className='todo-create'>
            <input className='todo-input' type="text" placeholder='Enter to do' />
            <button className='todo-add-button'>Add To Do</button>
        </div>
    )
}

export default ToDoCreate