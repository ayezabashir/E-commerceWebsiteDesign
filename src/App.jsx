import './App.scss'
import Header from './components/header/header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Pages from './pages/Pages';
import { deals } from './assets/data/data';
import { useState } from 'react';
function App() {

  const { productItems } = deals;
  const [cardItem, setCardItem] = useState([])
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Pages productItems={productItems} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
