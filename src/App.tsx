import './css/index.css'
import './css/App.css'
import { 
  Route, 
  Switch,
  Link
} from "react-router-dom"
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Switch>
        <Route path="/home" component={ Home } exact />
      </Switch>
      <Link to="/home">Home </Link>
    </>
  );
}

export default App
