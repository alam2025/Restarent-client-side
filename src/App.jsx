import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Componets/Shared/Navbar/Navbar'
export const DataContext= createContext(null)
function App() {
  let [count, setCount] = useState(1)
  const addData=()=>{
    setCount(count++)
  }
const info={
  count,
  addData
}
  return (
    <div className=''>
      <DataContext.Provider value={info}>
      <Navbar/>
      <div className='w-[80%] mx-auto mt-32'>

        <Outlet></Outlet>
      </div>
      </DataContext.Provider>
    </div>

  )
}

export default App
