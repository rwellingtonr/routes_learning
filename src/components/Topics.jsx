import React from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom"
import Topic from "./Topic/Topic"
import TopicB from "./Topic/TopicB"
/*
The url let me build Route paths that relative to the parent route.
While the 'url' lets me make a relative link 
*/
export default function Topics() {
  let { path, url } = useRouteMatch()

  console.log("Path: ", path)
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        <li>
          <Link to={`${url}/topicA`} />
          Topic A
        </li>
        <li>
          <Link to={`${url}/Topicb`} />
          Topic B
        </li>
        <li>
          <Link to={`${url}/TopicC`} />
          Topic C
        </li>
      </ul>

      <Switch>
        <Route path={path} exact></Route>
        <Route path={`${path}/:topicId`} component={Topic}></Route>
        <Route path={`${url}/Topicb`} component={TopicB}></Route>
      </Switch>
    </div>
  )
}
