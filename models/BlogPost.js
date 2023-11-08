const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
class BlogPost extends Model {}

BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4], // Min 4 characters for blog title
      },
    },
    blog_text: {
      type: DataTypes.STRING(512),
      allowNull: false,
      unique: true, // Prevent spam duplicate posts
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "blog_post",
  }
);

module.exports = BlogPost;
