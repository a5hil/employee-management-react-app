import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchEmployee from './Components/SearchEmployee'
import DeleteEmployee from './Components/DeleteEmployee'
import ViewEmployee from './Components/ViewEmployee'
import AddEmployee from './Components/AddEmployee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddEmployee />} />
      <Route path='/search' element={<SearchEmployee />} />
      <Route path='/delete' element={<DeleteEmployee />} />
      <Route path='/view' element={<ViewEmployee />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
