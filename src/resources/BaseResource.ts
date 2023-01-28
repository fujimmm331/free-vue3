import axios from "axios";

type ParamsType = {
  [key: string]: any
}

class BaseResource {
  baseUrl = 'http://localhost:3000'
  constructor() {
  }

  async get(endPoint: string) {
    const url = this.getUrl(endPoint)
    const response = await axios.get(url)

    return response.data
  }

  async post(endPoint: string, params: ParamsType) {
    const url = this.getUrl(endPoint)
    const response = await axios.post(url, params)

    return response.data
  }

  private getUrl = (url: string) => {
    return `${this.baseUrl}${url}`
  }
}

export default BaseResource