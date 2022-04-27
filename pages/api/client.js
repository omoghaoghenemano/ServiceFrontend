import axios from "axios"
import Cookies from 'js-cookie'

let mainurl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json"
  }
})

mainurl.interceptors.request.use(request => {
  const authToken = Cookies.get("auth_token")
  const companyToken = Cookies.get("CompanyToken")

  if (authToken) {
    request.headers["Authorization"] = `Bearer ${authToken}`
  }

  if (companyToken) {
    request.headers["CompanyToken"] = `${companyToken}`
  }
  return request
})

mainurl.interceptors.response.use(
  response => {
    return response
  },
  function (error) {
    if (error.response?.status === 401) {
      // localStorage.removeItem("auth_token")
      // localStorage.removeItem("refresh_token")
      // localStorage.removeItem("current_company_id")
      // localStorage.removeItem("CompanyToken")
      Cookies.remove("auth_token", {
        domain: process.env.NEXT_PUBLIC_CURRENT_DOMAIN ?? "localhost"
      })
      Cookies.remove("CompanyToken")
      // store.dispatch(action(actionTypes.UNAUTHENTICATE))
    }
    return Promise.reject(error)
  }
)

export default mainurl
