import apisauce from "apisauce"
import createAuthRefreshInterceptor from "axios-auth-refresh"
import refreshAuthLogic from "./refreshAuthLogic"

const create = id => {
  const accessToken = localStorage.getItem("JWT_ACCESS")

  const api = apisauce.create({
    baseURL: "/api",
    headers: { Authorization: `Bearer ${accessToken}` },
  })

  createAuthRefreshInterceptor(api.axiosInstance, refreshAuthLogic(api))

  const url = "/programs/" + id + "/queue/"

  //Trap url as a closure in the definition of getQueue
  const getQueue = async () => {
    const response = await api.get(url)
    return response
  }
  return {
    getQueue,
  }
}

export default create()
