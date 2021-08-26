import React from "react"
import { Route, Link, Switch, useRouteMatch } from "react-router-dom"
import Topic from "./Topic/Topic"
import TopicB from "./Topic/TopicB"
/*
The url let me build Route paths that relative to the parent route.
While the 'url' lets me make a relative link 
*/
export default function Topics() {
  let { path, url } = useRouteMatch()

  console.table([path, url])
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        <li>
          <Link to={`${url}/topicA`}>Topic A</Link>
        </li>
        <li>
          <Link to={`${url}/TopicB`}>Topic B</Link>
        </li>
        <li>
          <Link to={`${url}/TopicC`}>Topic C</Link>
        </li>
      </ul>

      <Switch>
        <Route path={path} exact>
          <h3>Choose one option</h3>
        </Route>
        <Route path={`${url}/TopicB`} component={TopicB}></Route>
        <Route path={`${path}/:topicId`} component={Topic}></Route>
      </Switch>
    </div>
  )
}
