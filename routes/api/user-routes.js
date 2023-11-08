const router = require("express").Router();
const { User, BlogPost, Comment } = require("../../models");

// The '/api/user' routes

router.get("/", async (req, res) => {
  // get all users
  try {
    const userData = await User.findAll({
      include: [{ model: BlogPost }, { model: Comment }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // get specific user based on req.params.id
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: BlogPost }, { model: Comment }],
    });

    if (!userData) {
      res.status(404).json({
        message: "ERROR: No user asociated with the provided id",
      });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create new user
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update specific user based on req.params.id
  try {
    const userData = User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({
        message: "ERROR: No user associated with the provided id",
      });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete specific user based on req.params.id
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({
        message: "ERROR: No user associated with the provided id",
      });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
