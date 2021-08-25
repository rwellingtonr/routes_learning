import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import Header from "../components/Header"
import About from "../components/About"
import GetInTouch from "../components/getInTouch"
import Support from "../components/Support"
import Page1 from "../components/Page1"

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        {/* routes here*/}
        <Route path="/" exact component={Page1} />
        <Route path="/about" exact component={About} />
        <Route path="/getInTouch" exact component={GetInTouch} />
        <Route path="/support" exact component={Support} />
      </main>
    </Router>
  )
}

export default App
