import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import '../App.css';

function ToDo() {
    return (
        <div className='todo'>
            <div>
                ilk todo
            </div>
            <div>
                <MdEditSquare className='edit-icon' />
                <IoIosRemoveCircle className='remove-icon' />
            </div>
        </div>
    )
}

export default ToDo