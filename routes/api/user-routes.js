const router = require("express").Router();
const { BlogPost, Comment } = require("../../models");

// The '/api/user' routes

router.get("/", async (req, res) => {
  // get all users
});

router.get("/:id", async (req, res) => {
  // get specific user based on req.params.id
});

router.post("/", async (req, res) => {
  // create new user
});

router.put("/:id", async (req, res) => {
  // update specific user based on req.params.id
});

router.delete("/:id", async (req, res) => {
  // delete specific user based on req.params.id
});

module.exports = router;
