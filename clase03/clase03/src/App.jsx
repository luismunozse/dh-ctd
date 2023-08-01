import { useState } from 'react'
import './App.css'
import ChildrenComponent from './Components/ChildrenComponent'

function App() {
  
  
  let nombre = "Juan"

  return (
    <>
      <ChildrenComponent nombre = {nombre}></ChildrenComponent>
    </>
  )
}

export default App
