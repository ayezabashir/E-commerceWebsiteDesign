import './App.scss'
import Header from './components/header/header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Pages from './pages/Pages';
import { Shopdata, deals } from './assets/data/data';
import { useState } from 'react';
import Cart from './cart/Cart';
function App() {
  const { productItems } = deals;
  const { shopsItem } = Shopdata;
  const [cartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(cartItem.map((item) =>
        (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = cartItem.find(item => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopsItem={shopsItem} />} />
          <Route path='/cart' element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
