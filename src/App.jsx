import { useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion'
import './App.css'
import First from './pages/First'
import Middle from './pages/Middle'
import Last from './pages/Last'

function App() {

  return (
    <>

      <div className='App'>
      <First/>
       <Middle/>
       <Last/>
      </div>
       
    </>
  )
}

export default App
