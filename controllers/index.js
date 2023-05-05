const express = require("express");
const router = express.Router();

const blogRoutes = require("./api/blogRoutes");
router.use("/api/blogs", blogRoutes);

const commentRoutes = require("./api/commentRoutes");
router.use("/api/comments", commentRoutes);

const userRoutes = require("./api/userRoutes.js");
router.use("/api/users", userRoutes);

router.get("/showsessions", (req, res) => {
  res.json(req.session);
});

module.exports = router;
