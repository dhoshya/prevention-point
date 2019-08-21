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

  const getQueue = async () => {
    const url = "/programs/" + id + "/queue/"
    const response = await api.get(url)
    return response
  }
  return {
    getQueue,
  }
}

export default create()
