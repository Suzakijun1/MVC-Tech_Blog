const router = require("express").Router();

const { Comment } = require("../../models");

const sequelize = require("../../config/connection");

const withAuth = require("../../utils/auth");

//GET all route
router.get("/", (req, res) => {
  Comment.findAll({})
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//specific comment

//post a comment

//update comment

//delete a comment
module.exports = router;
