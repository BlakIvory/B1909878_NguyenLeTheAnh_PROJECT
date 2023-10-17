const ApiError = require("../api-error");
const UserService = require("../services/user.service");
const MongoDB = require("../utils/mongodb.util");

exports.register = async (req, res, next) => {
  if (!req.body?.name) {
    return next(new ApiError(404, "Name can not be empty"));
  }
  //console.log(req.body);
  try {
    const userService = new UserService(MongoDB.client);
    const isUser = await userService.check(req.body.email);
     if (isUser.length >= 1) {
       return res.status(409).json({
         message: "email already in use",
       });
     }
    const document = await userService.register(req.body);

    // console.log(document);

    return res.send(document);
  } catch (error) {
    // console.log(error)
    return next(new ApiError(500, "An error occurred while creating the User"));
  }
};

exports.login = async (req, res, next) => {
  // console.log(req.body)
  let documents = [];
  try {
    const userService = new UserService(MongoDB.client);
    documents = await userService.check(req.body);
  } catch (error) {
    return next(new ApiError(500, "An error occurred while retrieving Users"));
  }
    return res.send(documents);
};
