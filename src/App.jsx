import './App.scss'
import Header from './components/header/header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Pages from './pages/Pages';
function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Pages />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
