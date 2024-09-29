import { useState } from 'react'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import ToDoList from './components/ToDoList'

function App() {

  const [todos, setTodos] = useState([]);

  const createToDo = (newToDo) => {
    setTodos([...todos, newToDo]); // Add newToDo to todos array using spread operator. 3 dots are used to spread the elements of the newToDo array into the todos array.
  }

  const deleteToDo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]); // Filter out the "todo" with the id that matches the id of the "todo" to be deleted.
  }

  const updateToDo = (toDoToBeUpdated) => {
    const updatedToDo = todos.map((todo) => {
      if (todo.id !== toDoToBeUpdated.id) {
        return todo;
      }
      return toDoToBeUpdated;
    })

    setTodos([...updatedToDo]);
  }

  return (
    <div className='App'>
      <div className='main'>
        <ToDoCreate onCreateToDo={createToDo} />
        <ToDoList todos={todos} onDeleteToDo={deleteToDo} onUpdateToDo={updateToDo} />
      </div>
    </div>
  )
}

export default App
