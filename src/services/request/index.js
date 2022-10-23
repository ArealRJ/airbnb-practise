import axios from "axios";

import { BASE_URL, TIMEOUT } from "./config";

class Request {
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT,
    })

    this.instance.interceptors.response.use(res => {
      return res.data;
    }, err => {
      // 判断err

      return err;
    })
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({...config, method:'get'});
  }

  post(config) {
    return this.request({...config, method: 'post'});
  }

  put(config) {
    return this.request({...config, method: 'put'});
  }

  delete(config) {
    return this.request({...config, method: 'delete'});
  }


}

export default new Request();