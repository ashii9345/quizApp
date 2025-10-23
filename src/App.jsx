import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Quiz from './Quiz'
import Admi from './Admi'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='qe' element={<Quiz/>}/>
          <Route path='admin' element={<Admi/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
