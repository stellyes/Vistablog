const router = require("express").Router();
const { BlogPost, User } = require("../models");

// Send all blog data to homepage
router.get("/", async (req, res) => {
  try {
    const blogData = await BlogPost.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });

    const posts = blogData.map((blogPosts) => blogPosts.get({ plain: true }));

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch {
    res.render("500");
  }
});

router.get("/login");

module.exports = router;
