import React from "react"
import { useParams } from "react-router-dom"

/*  
The Route responsible to render this component has a path of "topicId".
The part if the URL means a placeholder which we're able to retrive using 'useParams()', it gets the parameters
*/

export default function Topic() {
  const { topicId } = useParams()

  return (
    <div>
      <h2>{topicId}</h2>
    </div>
  )
}
