import { API } from "../api/service";

export default class Login {
  getMobileAuthCode(requestParams: any, requestHeaders: any) {
    return API.post("/login", requestParams, requestHeaders);
  }
  getLoginInfo(requestParams: any) {
    return API.get("/login", requestParams);
  }
}
