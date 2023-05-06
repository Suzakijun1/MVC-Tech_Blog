const sequelize = require("../config/connection");
const { Blog, User, Comment } = require("../models");
const router = require("express").Router();

router.get("/", (req, res) => {
  Blog.findAll({
    include: [User],
  }).then((dbBlogData) => {
    const blogData = dbBlogData.map((blog) => {
      return blog.get({ plain: true });
    });
    res.render("allPost", { layout: "main", blogData });
  });
});

module.exports = router;
