// Import all models
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");
const User = require("./User");

// Users have many posts
User.hasMany(BlogPost, {
  foreignKey: "user_id",
});

// Every post belongs to a user
BlogPost.belongsTo(User, {
  foreignKey: "user_id",
});

// Users have many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

// Every comment belongs to a user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// Blog posts have many comments
BlogPost.hasMany(Comment, {
  foreignKey: "post_id",
});

// Every comment belongs to a blog post
Comment.belongsTo(BlogPost, {
  foreignKey: "post_id",
});

module.exports = {
  User,
  Comment,
  BlogPost,
};
