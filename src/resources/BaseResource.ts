import axios from "axios";
class BaseResource {
  constructor() {
  }

  get(url: string) {
    axios.get(url)
      .then((data) => console.log('data', data))
  }
}

export default BaseResource