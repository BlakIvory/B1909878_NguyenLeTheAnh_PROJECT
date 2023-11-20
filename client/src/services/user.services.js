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

  async getAllOrderProducts(user) {
    const data = { email: user };
    // console.log(data);
    return await this.api.post("/getOrderProduct", data);
  }
  async Order(data) {
    return await this.api.post("/Order", data);
  }
  async deleteOrder(data) {
    // console.log(data);
    return await this.api.post("/deleteOrderProduct", data);
  }
  async deleteAllOrder(data) {
    // console.log(data);
    return await this.api.post("/deleteAllOrderProduct", data);
  }
  async UserOrder(email) {
    const data = {
      email: email,
    };
    return await this.api.post("/userOrder", data);
  }
  async AllUserOrder() {
    try {
      // console.log(data);
      return await this.api.post("/allUserOrder");
    } catch (error) {
      console.log(error);
    }
  }
  async confirmUserOrder(data) {
    try {
      // console.log(data);
      return await this.api.post("/confirmUserOrder", data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserService();
