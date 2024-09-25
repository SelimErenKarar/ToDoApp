import React from 'react'
import ToDo from './ToDo'
import '../App.css'

function ToDoList({ todos, onDeleteToDo }) {
    return (
        <div className='todo-list'>
            {
                todos && todos.map((todo) => (
                    <ToDo key={todo.id} todo={todo} onDeleteToDo={onDeleteToDo} />
                ))
            }
        </div>
    )
}

export default ToDoList