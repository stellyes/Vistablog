const router = require("express").Router();
const { Comment, User } = require("../../models");

// The '/api/blogpost' endpoint

router.get("/", async (req, res) => {
  // get all blog posts
});

router.get("/:id", async (req, res) => {
  // get specific blog post based on req.params.id
});

router.post("/", async (req, res) => {
  // create new blog post
});

router.put("/:id", async (req, res) => {
  // update specific blog post based on req.params.id
});

router.delete("/:id", async (req, res) => {
  // delete specific blog post based on req.params.id
});

module.exports = router;
