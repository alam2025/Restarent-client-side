import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Componets/Shared/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar/>
      <div className='w-[80%] mx-auto mt-32'>

        <Outlet></Outlet>
      </div>
    </div>

  )
}

export default App
