const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
        len: [3], // Min username length of 3 characters
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [8], // Min password length of 8 characters
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
