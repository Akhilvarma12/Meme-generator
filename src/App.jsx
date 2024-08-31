import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import EditPage from './pages/Edit'
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
      <Route path='/edit' element={<EditPage/>}/>

    </Routes>
    </div>
    </>
  )
}

export default App
