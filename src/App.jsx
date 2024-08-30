import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
    <h1>Meme generator</h1>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
