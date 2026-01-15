const express = require("express");
const router = express.Router();

//uasers
//index-users
router.get("/", (req, res) => {
  res.send("Get for users");
});

//show users
router.get("/:id", (req, res) => {
  res.send("get for users by id");
});

//post route
router.post("/", (req, res) => {
  res.send("Post for show users");
});

//delete route
router.delete("/:id", (req, res) => {
  res.send("User deleted of this id");
});

module.exports = router;
