const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const router = require("express").Router();

router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  }).then((dbPostData) => {
    const postData = dbPostData.map((post) => post.get({ plain: true }));

    res.render("allPost", {
      postData,
      loggedIn: req.session.loggedIn,
    });
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});
module.exports = router;
