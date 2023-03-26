import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Flipbook from './components/Flipbook/flipbook'
import Products from './components/Product/products'
import Navb from './components/Navbar/navbar'
export default function App() {
  return (
    <div>
    <Navb/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="about" element={<About/>}></Route>
    <Route path="contact" element={<Contact/>}></Route>
    <Route path="flipbook" element={<Flipbook/>}></Route>
    <Route path="product1" element={<Products/>}></Route>
    <Route path="product2" element={<Products/>}></Route>
    <Route path="product3" element={<Products/>}></Route>
    </Routes>
    </div>
  )
}
