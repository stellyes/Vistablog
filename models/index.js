// Import all models
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");
const User = require("./User");

User.hasMany(BlogPost, {
  // foreignKey: ""
});

BlogPost.hasOne(User, {
  //foreignKey: ""
});

User.hasMany(Comment, {
  //foreignKey: ""
});

Comment.hasOne(User, {
  //foreignKey: ""
});

module.exports = {
  User,
  Comment,
  BlogPost,
};
