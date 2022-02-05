const express = require("express");
const auth = require("../middleware/auth");

const User = require("../models/User");

const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    console.log("10", user);
    const token = await user.generateAuthToken();
    console.log(token);
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

router.get("/users/me", auth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
