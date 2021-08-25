import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import Header from "../components/Header"
// import About from "../components/About"
// import GetInTouch from "../components/getInTouch"
// import Support from "../components/Support"
// import Page1 from "../components/Page1"
import MainRoutes from "./Routes"

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <MainRoutes />
      </main>
    </Router>
  )
}

export default App
