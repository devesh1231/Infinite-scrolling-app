import React from 'react';
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navv from './components/Navv'
import Login from './components/Loginn/Login'
import PrivateComponent from './PrivateComponent';
import Home from './components/Home';
function App() {
  return (
    <div className='App'>
     <BrowserRouter>
      <Navv/>
      <Routes>
        <Route element = {<PrivateComponent/>}>
        <Route path="/" element = {<Home/>}/>
        </Route>
        <Route path ="/login" element = {<Login/>}/>
      </Routes>
     </BrowserRouter>
      
    </div>
  )
}

export default App
