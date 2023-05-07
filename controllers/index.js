const router = require("express").Router();

const commentRoutes = require("./api/commentRoutes");
router.use("/api/comments", commentRoutes);

const userRoutes = require("./api/userRoutes.js");
router.use("/api/users", userRoutes);

const homeRoute = require("./homeRoute.js");
router.use("/", homeRoute);

const dashboardRoutes = require("./dashboardRoutes.js");
router.use("/dashboard", dashboardRoutes);

router.get("/showsessions", (req, res) => {
  res.json(req.session);
});

module.exports = router;
