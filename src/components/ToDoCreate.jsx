import React from 'react'
import { useState } from 'react'
import '../App.css'

function ToDoCreate({ onCreateToDo }) {

    const [newToDo, setNewToDo] = useState('');

    const clearInput = () => {
        setNewToDo('');
    }

    const createToDo = () => {
        if (!newToDo) return;
        const request = {
            id: Math.floor(Math.random() * 100000),
            content: newToDo
        }
        onCreateToDo(request);
        clearInput();
    }

    return (
        <div className='todo-create'>
            <input value={newToDo} onChange={(e) => setNewToDo(e.target.value)} className='todo-input' type="text" placeholder='Enter to do' />
            <button onClick={createToDo} className='todo-add-button'>Add To Do</button>
        </div>
    )
}

export default ToDoCreate