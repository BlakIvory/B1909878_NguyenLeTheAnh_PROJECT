
import createApiClient from "./api.service";

class UserService {
  constructor(baseUrl = "/api/user") {
    this.api = createApiClient(baseUrl);
  }

  async register(data) {
    try {
      return await this.api.post("/register", data);
    } catch (error) {
      console.log(error);
    }
  }
  async login(data) {
    let auth = await this.api.post("/login", data);
    // console.log(auth.data)
    try {
      return await this.api.post("/login", data);
    } catch (error) {
      return console.log(error);
    }
  }
  async logout(data) {
    localStorage.clear();
  }
  async orderProducts(data) {
    return await this.api.post("/orderProduct", data);
  }

  async getAllOrderProducts(data) {
    return await this.api.get("/getOrderProduct", data);
  }
  async Order(data) {
    return await this.api.post("/Order", data);
  }
  async deleteOrder(data) {
    console.log(data);
    return await this.api.get("/deleteOrderProduct", data);
  }
}

export default new UserService();
