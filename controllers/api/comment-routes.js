const router = require("express").Router();
const { Comment, User } = require("../../models");

// The '/api/comment' routes

router.get("/", async (req, res) => {
  // get all comments
  try {
    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // get specific comment based on req.params.id
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });

    if (!commentData) {
      res.status(404).json({
        message: "ERROR: No comment associated with the provided id",
      });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create new comment
  try {
    const commentData = await Comment.create(req.body);
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update specific comment based on req.params.id
  try {
    const commentData = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!commentData) {
      res.status(404).json({
        message: "ERROR: No comment associated with the provided id",
      });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete specific comment based on req.params.id
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commentData) {
      res.status(404).json({
        message: "ERROR: No comment associated with the provided id",
      });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
