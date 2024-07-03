import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import AddToDo from './Pages/AddToDo';
import { ListProvider } from './Hooks/ListContext';

function App() {
  return (
    <div className="App"><ListProvider>
         <BrowserRouter>
      <Navbar/>
        <Routes>
          
            <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/add-todo' element={<AddToDo/>}/>
          
          
        </Routes>
      </BrowserRouter>
       </ListProvider>
      
    </div>
  );
}

export default App;
