const router = require("express").Router();
const { BlogPost, Comment, User } = require("../../models");

// The '/api/blogpost' endpoint

router.get("/", async (req, res) => {
  // get all blog posts
  try {
    const blogData = await BlogPost.findAll({
      include: [
        {
          model: Comment,
          attributes: ["id", "comment_text"],
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // get specific blog post based on req.params.id
  try {
    const blogData = await BlogPost.findByPk({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Comment,
          attributes: ["id", "comment_text"],
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    if (!blogData) {
      res.status(404).json({
        message: "ERROR: No blog post associated with the provided id",
      });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create new blog post
  try {
    const blogData = await BlogPost.create(req.body);
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update specific blog post based on req.params.id
  try {
    const blogData = await BlogPost.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({
        message: "ERROR: No blog post associated with the provided id",
      });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete specific blog post based on req.params.id
  try {
    const blogData = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({
        message: "ERROR: No blog post associated with the provided id",
      });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
