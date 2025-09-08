import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Demo/Home'
import About from './Demo/About'
import Form from './Demo/Form'
import APICall from './Demo/APICall'

function App() {
  return (
    <>
      <div>
        <Router>
          <nav>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/form"> Form </Link>
            <Link to="/apicall"> API Call </Link>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/form' element={<Form />} />
            <Route path='/apicall' element={<APICall />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
