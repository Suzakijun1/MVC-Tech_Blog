const express = require("express");
const router = express.Router();
const { User, Blog, Comment } = require("../../models");
const withAuth = require("../../utils/auth.js");

//get all blogs
router.get("/", (req, res) => {
  Blog.findAll({ include: [User, Comment] })
    .then((dbBlogs) => {
      res.json(dbBlogs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//when a user clicks on a specific post, return all that data
