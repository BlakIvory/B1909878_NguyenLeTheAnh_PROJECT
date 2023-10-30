const ApiError = require("../api-error");
const UserService = require("../services/user.service");
const MongoDB = require("../utils/mongodb.util");

exports.register = async (req, res, next) => {
  try {
    const userService = new UserService(MongoDB.client);
    const document = await userService.register(req.body);
    return res.send(document);
  } catch (error) {
    // console.log(error)
    return next(new ApiError(500, "An error occurred while creating the User"));
  }
};

exports.login = async (req, res, next) => {
  //  console.log(req.body)
  let documents = [];
  try {
    const userService = new UserService(MongoDB.client);
    documents = await userService.check(req.body);
    if (documents.length >= 1) {
       return res.send(documents);
    } else {
      return next(
        new ApiError(201, "Sai tai khoản hoặc mật khẩu")
      );
    }
  } catch (error) {
    return next(new ApiError(500, "An error occurred while retrieving Users"));
  }
    
};
