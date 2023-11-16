const express = require("express");
const users = require("../controllers/user.controller");


const router = express.Router();



router.post("/register", users.register);

router.post("/login", users.login);

router.post("/orderProduct",users.orderProduct);

router.get("/getOrderProduct", users.getAllOrderProduct);

router.post("/Order", users.Order);

router.post("/deleteOrderProduct", users.deleteOrderProduct);

router.post("/deleteAllOrderProduct", users.deleteAllOrderProduct);

router.post("/userOrder", users.getUserOrder);

router.get("/allUserOrder", users.getAllUserOrder);
module.exports = router;