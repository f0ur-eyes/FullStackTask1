import React from 'react'
import { useContext } from 'react'
import ListContext, { ListProvider } from '../Hooks/ListContext'
import { useState } from 'react'
import "../Styles/Pages.css"

function List() {
    //useContext to use the list
    const {list} = useContext(ListContext)
    
    return (
    <div>
        <ul className='list'>
            {
                list.map((item) => (
                    <li key={item.id}> { item } </li>
                ))
            }
        </ul>
    </div>
  )
}

export default List