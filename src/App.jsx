import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/companies' element={<About />} />
        <Route path='/services' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<About />} />

      </Routes>
    </>
  )
}

export default App
