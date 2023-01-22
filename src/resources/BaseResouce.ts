import axios from "axios";

export default class BaseResource {
  constructor() {
  }

  get(url: string) {
    axios.get(url)
      .then((data) => console.log('data', data))
  }
}