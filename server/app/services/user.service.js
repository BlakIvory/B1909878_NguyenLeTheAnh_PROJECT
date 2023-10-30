const { ObjectId } = require("mongodb");
const ApiError = require("../api-error");

class UserService {
  constructor(client) {
    this.User = client.db().collection("products");
  }

  extractUserData(payload) {
    const user = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      order: {},
      giohang: {},
      isAdmin: payload.isAdmin,
    };
    Object.keys(user).forEach(
      (key) => user[key] === undefined && delete user[key]
    );
    return user;
  }
  async register(payload) {
    // console.log(payload)
    const user = await this.extractUserData(payload);
    // console.log(user);
    const result = await this.User.findOneAndUpdate(
      user,
      { $set: { order: {}, isAdmin: false, giohang : {} } },
      { returnDocument: "after", upsert: true }
    );
    return result;
  }

  async check(filter) {
    // console.log( filter.email);
    const cursor = await this.User.find(filter);
    return await cursor.toArray();
  }

  async checkEmail(filter) {
    console.log("filter Email: " + filter);
    const cursor = await this.User.find({ email: filter });
    return await cursor.toArray();
  }

  async findUserById(id) {
    return await this.User.findOne({
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    });
  }
}

module.exports = UserService;
