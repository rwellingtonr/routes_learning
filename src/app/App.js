import React from "react"
import { BrowserRouter as Router, Route } from "reaact-router-dom"
import "./App.css"
import Header from "../components/Header"
import About from "../components/About"
import GetInTouch from "../components/getInTouch"

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        {/* routes here*/}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/getInTouch">
          <GetInTouch />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
      </main>
    </Router>
  )
}

export default App
