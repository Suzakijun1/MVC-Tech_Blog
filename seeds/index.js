const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const users = [
  {
    username: "user1",
    password: "password1",
  },
  {
    username: "user2",
    password: "password2",
  },
];

const posts = [
  {
    title: "My First Post",
    content: "This is my first post's contents",
    user_id: 1,
  },
];

const comments = [
  {
    body: "This is a comment!",
    post_id: 1,
    user_id: 1,
  },
];

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(users, {
    individualHooks: true,
  });
  await Post.bulkCreate(posts);
  await Comment.bulkCreate(comments);
  process.exit(0);
};
seedAll();
