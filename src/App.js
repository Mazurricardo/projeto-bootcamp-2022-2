import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/Home.css'
import Home from './Pages/Home'
import AddProducts from './components/Products/AddProducts'
import Cart from './components/Products/Cart'
import EditProduct from './components/Products/EditProduct.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/comprar" element={<AddProducts />} />
        <Route exact path="/carrinho" element={<Cart />} />
        <Route exact path="/editar/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
