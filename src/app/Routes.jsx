import React from "react"
import About from "../components/About"
import GetInTouch from "../components/getInTouch"
import Support from "../components/Support"
import Page1 from "../components/Page1"
import Topics from "../components/Topics"

import { Route, Switch } from "react-router-dom"

// Where I storage my routes

export default function MainRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Page1} />
      <Route path="/about" component={About} />
      <Route path="/getInTouch" component={GetInTouch} />
      <Route path="/support" component={Support} />
      <Route path="/topics" component={Topics} />
    </Switch>
  )
}
