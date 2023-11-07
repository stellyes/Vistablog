// Import all models
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");
const User = require("./User");

User.hasMany(BlogPost, {
  foreignKey: "user_id",
});

BlogPost.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.hasOne(User, {
  //foreignKey: ""
});

module.exports = {
  User,
  Comment,
  BlogPost,
};
