const sequelize = require("../config/connection");
const { Blog, User, Comment } = require("../models");
const router = require("express").Router();

router.get("/", (req, res) => {
  Blog.findAll({
    include: [User],
  }).then((dbBlogData) => {
    const blogData = dbBlogData.map((blog) => blog.get({ plain: true }));

    res.render("allPost", {
      blogData,
      loggedIn: true,
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
