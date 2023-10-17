const { ObjectId } = require("mongodb");

class UserService {
  constructor(client) {
    this.User = client.db().collection("users");
  }

  extractUserData(payload) {
    // console.log(payload)
    const user = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    };
    // console.log(user);
    Object.keys(user).forEach(
      (key) => user[key] === undefined && delete user[key]
    );
    return user;
  }

  async register(payload) {
    // console.log(payload)
    const user = await this.extractUserData(payload);
    // console.log(user);
    const result = await this.User.insertOne(user);

    return result;
  }

  async check(filter) {
    // console.log(filter);
    const cursor = await this.User.find(filter);
    return await cursor.toArray();
  }


}

module.exports = UserService;
