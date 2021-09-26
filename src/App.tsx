import './css/style.css'
import { Route, Switch } from "react-router-dom"

import Nav from './components/Nav/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Warlord from './game/Warlord'


function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" component={ Home } exact />
        <Route path="/projects" component={ Projects } exact />
        <Route path="/projects/warlord" component={ Warlord } exact />
      </Switch>
    </>
  )
}

export default App
