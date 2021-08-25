import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
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
        <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/about" component={About} />
          <Route path="/getInTouch" component={GetInTouch} />
          <Route path="/support" component={Support} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
