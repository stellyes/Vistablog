const router = require("express").Router();
const bcrypt = require("bcrypt");
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
    const newUser = req.body;

    // Securely store password by encrypting data
    newUser.password = await bcrypt.hash(req.body.password, 10);

    const userData = await User.create(newUser);

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

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res
        .status(404)
        .json({ message: "Login failed. Incorrect email/password" });
      return;
    }

    // Validate password against encrypted version
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Login failed. Incorrect email/password" });
      return;
    }

    res.status(200).json({ code: 200 });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
