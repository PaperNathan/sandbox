import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import { HashRouter as Router } from "react-router-dom"

// import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

// reportWebVitals()
