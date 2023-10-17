const express = require("express");
const users = require("../controllers/user.controller");


const router = express.Router();

// router.get("/", users.findAll);

router.post("/register", users.register);

router.post("/login", users.login);

// router.delete("/",users.deleteAll);

// router.get("/favorite", users.findAllFavorite);

// router.get("/:id", users.findOne);

// router.put("/:id", users.update);

// router.delete("/:id", users.delete);



module.exports = router;