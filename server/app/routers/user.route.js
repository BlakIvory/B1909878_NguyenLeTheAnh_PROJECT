const express = require("express");
const users = require("../controllers/user.controller");


const router = express.Router();



router.post("/register", users.register);

router.post("/login", users.login);

router.post("/orderProduct",users.orderProduct);

router.get("/getOrderProduct", users.getAllOrderProduct);

router.post("/Order", users.Order);

module.exports = router;