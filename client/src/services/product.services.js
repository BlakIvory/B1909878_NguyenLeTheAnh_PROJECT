import createApiClient from "./api.service";

class ProductService {
  constructor(baseUrl = "/api/product") {
    this.api = createApiClient(baseUrl);
  }
  async getProducts() {
    // console.log("object")
    const result = (await this.api.get("/getProducts")).data;
    // console.log(result)
    return result;
  }
  async createProduct(data) {
    console.log(data);

    const result = (await this.api.post("/createProduct",data));
    // console.log(result)
    return result;
  }
}
export default new ProductService();