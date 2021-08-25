import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/getInTouch">get in touch</Link>
      <Link to="/support">Support</Link>
    </div>
  )
}

export default Header
