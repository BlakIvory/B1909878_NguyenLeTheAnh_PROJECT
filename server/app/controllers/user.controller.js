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
      return next(new ApiError(201, "Sai tai khoản hoặc mật khẩu"));
    }
  } catch (error) {
    return next(new ApiError(500, "An error occurred while retrieving Users"));
  }
};

exports.getAllOrderProduct = async (req, res) => {
  // console.log(req.body);
  try {
    const userService = new UserService(MongoDB.client);
    // const message = "Thêm vào giỏ hàng thành công !";
    const data = await userService.check(req.body);
    // console.log(data[0].giohang)
    const result = {
      products: data[0].giohang,
      message: "Tìm kiếm thành công !",
    };
    return res.send(result);
  } catch (error) {
    console.log(error);
  }
};
exports.orderProduct = async (req, res) => {
  // console.log(req.body);
  try {
    if (req.body.quality != 0) {
      const userService = new UserService(MongoDB.client);
      const message = "Thêm vào giỏ hàng thành công !";
      const data = await userService.orderProduct(req.body);
      const result = {
        data: data,
        message: message,
      };
      // console.log(result)
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.Order = async (req, res) => {
  // console.log(req.body);
  try {
    const userService = new UserService(MongoDB.client);
    let message = "";
    const data = await userService.order(req.body);
    if (!data) {
      const result = {
        message: "Đặt hàng không thành công !",
      };
      // console.log(result);
      return res.send(result);
    } else {
      const result = {
        data: data,
        message: "Đặt hàng thành công !",
      };
      // console.log(result);
      return res.send(result);
    }
  } catch (error) {
    console.log(error);
  }
};
