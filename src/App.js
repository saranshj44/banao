import React from 'react'
import Nav from './components/Nav'
import Maintabs from './components/Maintabs'
import './App.css'
function App() {
  return (
    <div>
      <Nav/>
      <div className='maincomp'>
        <Maintabs />
      </div>
    </div>
  )
}

export default App