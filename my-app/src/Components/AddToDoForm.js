import React, { useRef } from 'react'
import { useContext } from 'react'
import ListContext from '../Hooks/ListContext'
import { useState } from 'react'
import { useEffect } from 'react'
import "../Styles/Pages.css"

function AddToDoForm() {
  //useState for the element that will be added to the list
  const [todoElement, setTodoElement] = useState("")
  //useContext to the list itself
  const {list, addToList} = useContext(ListContext)

  //useRef
  const inputRef = useRef(null)
  //useEffect to focus the input by default
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  //Handling the submit in an arrow function
  const handleSubmit = (e) => {
    //Prevent default, add the element to the list, empty the input
    e.preventDefault()
    addToList(todoElement)
    setTodoElement("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        ref={inputRef}
        placeholder='new ToDo'
        type='text'
        value={todoElement}
        onChange={(e)=>setTodoElement(e.target.value)}/>
      <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddToDoForm