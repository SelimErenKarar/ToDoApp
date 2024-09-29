import React from 'react'
import ToDo from './ToDo'
import '../App.css'

function ToDoList({ todos, onDeleteToDo, onUpdateToDo }) {
    return (
        <div className='todo-list'>
            {
                todos && todos.map((todo) => (
                    <ToDo key={todo.id} todo={todo} onDeleteToDo={onDeleteToDo} onUpdateToDo={onUpdateToDo} />
                ))
            }
        </div>
    )
}

export default ToDoList