const express = require("express");
const router = express.Router();

//posts
//index
router.get("/", (req, res) => {
  res.send("Get for posts");
});

//show
router.get("/:id", (req, res) => {
  res.send("get for posts by id");
});

//post
router.post("/", (req, res) => {
  res.send("Post for show users");
});

//delete
router.delete("/:id", (req, res) => {
  res.send("User deleted of this id");
});

module.exports = router;
