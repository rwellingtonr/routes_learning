import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Header from "../components/Header"
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
