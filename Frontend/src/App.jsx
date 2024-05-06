import React from 'react'
import Home from './home/Home'
import Courses from './components/Courses'
import { Routes } from 'react-router-dom'
import {Route} from 'react-router-dom'
import Signup from './components/Signup'
function App() {
  return (
    <>
     <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/course' element={<Courses/>}/>
       <Route path='/Signup' element={<Signup/>}/>
     </Routes>
     </div>
    </>
  )
}

export default App
