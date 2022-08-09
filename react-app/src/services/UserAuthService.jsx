import axios from "axios";
import { hostNameUrl } from "../config/api";

class UserAuthService {
  async login(email, password) {
    return axios
      .post(hostNameUrl + "/user/login", { email: email, password: password })
      .then((response) => {
        if (response) {
          
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.clear();
  }
  register(username, email, password) {
    return axios.post(hostNameUrl + "/user/signup", {
      "name": username,
      "email": email,
      "password": password,
    });
  }
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new UserAuthService();
