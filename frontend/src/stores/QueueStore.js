import { observable, action, flow } from "mobx"
//import { toJS } from "mobx"
import queueApi from "../api/queueApi"

class QueueStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable queues = []

  @action setElement(element, index) {
    this.queues[index].push(element)
  }

  getQueue = flow(function*() {
    try {
      const results = yield queueApi.getElements()
      const index = 2
      if (results) {
        results.data.forEach(element => {
          this.setElement(element, index)
        })
      }
    } catch (error) {
      // TODO: Handle errors
      //console.log(error)
    }
  })
}

const queueStore = (window.queueStore = new QueueStore())
export default queueStore
