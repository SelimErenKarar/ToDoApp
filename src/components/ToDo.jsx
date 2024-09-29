import React from 'react'
import { useState } from 'react';
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import '../App.css';

function ToDo({ todo, onDeleteToDo, onUpdateToDo }) {
    const { id, content } = todo;

    const [editable, setEditable] = useState(false);
    const [editedContent, setEditedContent] = useState(content);

    const deleteToDo = () => {
        onDeleteToDo(id);
    }

    const updateToDo = () => {
        const request = {
            id: id,
            content: editedContent
        }
        onUpdateToDo(request);
        setEditable(false);
    }

    return (
        <div className='todo'>
            <div>
                {
                    editable ? <input style={{ width: '350px' }} value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)} className='todo-input' type="text" /> : content
                }
            </div>
            <div>
                {
                    editable ? <FaCheckCircle className='edit-icon' onClick={updateToDo} /> :
                        <MdEditSquare className='edit-icon' onClick={() => setEditable(true)} />
                }
                <IoIosRemoveCircle className='remove-icon' onClick={deleteToDo} />
            </div>
        </div>
    )
}

export default ToDo