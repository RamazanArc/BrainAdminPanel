import { API } from "../api/service";

export default class Login {
  // getMobileAuthCode(requestParams: any, requestHeaders: any) {
  //   return API.post("/login", requestParams, requestHeaders);
  // }
  getLoginInfo(body: any) {
    return API.get("/Login", body);
  }
  getMobileAuthCode(body: any) {
    return API.post("/Login/GetMobileAuthCode", body);
  }
  getProfileWithToken(body: any) {
    return API.post("/Login/GetProfileWithToken", body);
  }
  setNotificationToken(body: any) {
    return API.post("/Login/SetNotificationToken", body);
  }
  checkToken(body: any) {
    return API.get("/Login/CheckToken", body);
  }
  checkScreen(body: any) {
    return API.get("/Login/checkScreen", body);
  }
}
