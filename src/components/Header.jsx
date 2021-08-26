import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/getInTouch">Get in touch</Link>
      <Link to="/support">Support</Link>
      <Link to="/topics">Topics</Link>
    </div>
  )
}

export default Header
