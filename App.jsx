import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Bottom from './Bottom'
import Contact from './Contact'
import Home from './Home'
import Products from './Products'
import ScrollUp from './ScrollUp'
import Services from './Services'
import Header from './Top'
function App() {
  return (
    <>
        <BrowserRouter>
        <ScrollUp/>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/products' element={<Products/>}/>
            </Routes>
            <Bottom/>
        </BrowserRouter>
        </>
   
  )
}

export default App;
