import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartComponentContext from './context/cartContext'
import Cart from './components/cart/cart'
import CheckoutForm from './components/checkoutForm/checkoutForm'


function App() {

  return (
    <>
    <CartComponentContext>

        <BrowserRouter>

          <NavBar /> 

          <Routes>

            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route exact path='/category/:categoria' element={<ItemListContainer/>} />
            <Route exact path='/cart' element={<Cart/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/form' element={<CheckoutForm />} />

          </Routes>

        </BrowserRouter>

      </CartComponentContext>
    </>
  )
}

export default App

