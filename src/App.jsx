import './App.scss'
import Header from './components/header/header'
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
} from "react-router-dom";
function App() {

  return (
    <>
      <Router>
        <Header />
        {/* <Switch> */}
        {/* <Route exact path='/'>
            
          </Route> */}
        {/* </Switch> */}
      </Router>
    </>
  )
}

export default App
