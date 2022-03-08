import { React } from 'react'
import './App.css'
import './bootstrap.min.css'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Page/Home/Home'
import List from './Page/List/List'
import Single from './Page/List/Single'
import AddRent from './Page/AddRent/AddRent'
import About from './Page/About/About'
import Dashboard from './Page/Dashboard/Dashboard'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/search' element={<List />} />
      </Routes>
      <Routes>
        <Route path='/search/:id' element={<Single />} />
      </Routes>
      <Routes>
        <Route path='/add' element={<AddRent />} />
      </Routes>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
