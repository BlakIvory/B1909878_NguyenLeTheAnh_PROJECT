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
    console.log(data);
    return data;
  }
}

export default new UserService();
