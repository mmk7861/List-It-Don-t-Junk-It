import { useState } from 'react'
import {Outlet, NavLink } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='p-5 bg-black'> 
      <div className='container mx-auto flex items-center'> 
        <NavLink to='/' className={'text-white text-lg'}> AUTO PARTS</NavLink>
        <div className='ml-auto flex items-center space-x-3 '> 
        <NavLink to='/auth/login' className={'text-white text-md border border-white p-3'}> Login</NavLink>
        <NavLink to='/auth/register' className={'text-white text-md border border-white p-3'}> Register</NavLink>
        </div>
        </div>
      </header>
      <main className='bg-white p-5'>
        <Outlet/>

      </main>
      <footer className='p-5 bg-black text-white text-md'>
        &copy; autoparts
      </footer>



    </>
  )
}

export default App
