import { useState } from 'react'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <div className='App'>
      <div style={{ width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <ToDoCreate />
        <ToDoList />
      </div>
    </div>
  )
}

export default App
