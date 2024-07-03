import React from 'react'
import List from '../Components/List'
import { ListProvider } from '../Hooks/ListContext'

function Home() {
  return (
    <div>
        <h1>Welcome to home</h1>
        
          <List/>
          
            
    </div>
  )
}

export default Home