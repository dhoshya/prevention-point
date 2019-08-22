import apisauce from "apisauce"
import createAuthRefreshInterceptor from "axios-auth-refresh"
import refreshAuthLogic from "./refreshAuthLogic"

const create = id => {
  const accessToken = localStorage.getItem("JWT_ACCESS")
  let queueIndex = id

  const api = apisauce.create({
    baseURL: "/api",
    headers: { Authorization: `Bearer ${accessToken}` },
  })

  createAuthRefreshInterceptor(api.axiosInstance, refreshAuthLogic(api))

  //Debugging ???
  queueIndex = 2
  const url = "/programs/" + queueIndex + "/queue/"

  //Trap url as a closure in the definition of getQueue
  const getQueue = async () => {
    //console.log("Made api call")
    //console.log(url)
    const response = await api.get(url)
    //console.log(response)
    return response
  }
  return {
    getQueue,
  }
}

export default create()
