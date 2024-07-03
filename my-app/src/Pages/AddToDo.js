import React from 'react'
import AddToDoForm from '../Components/AddToDoForm'
import ListContext, { ListProvider } from '../Hooks/ListContext'

function AddToDo() {
  return (
    <div>
        <h1>Welcome to add-todo</h1>
      
          <AddToDoForm/>
          
          
    </div>
  )
}

export default AddToDo