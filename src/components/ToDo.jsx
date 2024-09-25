import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import '../App.css';

function ToDo({ todo, onDeleteToDo }) {
    const { id, content } = todo;

    const deleteToDo = () => {
        onDeleteToDo(id);
    }

    return (
        <div className='todo'>
            <div>
                {content}
            </div>
            <div>
                <MdEditSquare className='edit-icon' />
                <IoIosRemoveCircle className='remove-icon' onClick={deleteToDo} />
            </div>
        </div>
    )
}

export default ToDo