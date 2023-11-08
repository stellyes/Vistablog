const router = require("express").Router();
const { BlogPost, User } = require("../../models");

// The '/api/comment' routes

router.get("/", async (req, res) => {
  // get all comments
});

router.get("/:id", async (req, res) => {
  // get specific comment based on req.params.id
});

router.post("/", async (req, res) => {
  // create new comment
});

router.put("/:id", async (req, res) => {
  // update specific comment based on req.params.id
});

router.delete("/:id", async (req, res) => {
  // delete specific comment based on req.params.id
});

module.exports = router;
