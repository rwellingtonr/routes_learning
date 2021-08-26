import React from "react"
import { useHistory, useLocation } from "react-router-dom"

const Support = () => {
  const history = useHistory()

  const handleClick = () => {
    history.goBack()
  }

  return (
    <div>
      <h1>Support</h1>
      <button type="button" onClick={handleClick}>
        Go back
      </button>
    </div>
  )
}

export default Support
