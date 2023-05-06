const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//creates a 1:m association between User and Posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});
Comment.belongsTo(Post, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

User.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

module.exports = {
  User,
  Post,
  Comment,
};
