import React from "react"
import { observer } from "mobx-react"
import queueStore from "../stores/QueueStore"

//Test values
const queueIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const whichQueue = 2

export default
@observer
class Queue extends React.Component {
  constructor(props) {
    super(props)
    this.store = queueStore
    this.store.getQueue(2)
    //console.log("Called getQueue in constructor")
    queueIndex.forEach(index => this.store.getQueue(index))
  }

  render() {
    const store = queueStore
    return (
      <div>
        <p>Queue</p>
        <div className="queue">
          {store.queues[whichQueue].map((element, index) => (
            <p key={index}>
              {element.participant.first_name} {element.participant.last_name}
              {element.participant.pp_id}
            </p>
          ))}
        </div>
      </div>
    )
  }
}
