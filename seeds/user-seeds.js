const { User } = require("../models");

const userData = [
  {
    email: "corny@useremail.com",
    username: "cornball99",
    password: "safetyFirst",
  },
  {
    email: "helpless@romantic.com",
    username: "br0kenh4rts",
    password: "itsaClub",
  },
  {
    email: "user1@example.com",
    username: "user123",
    password: "password1",
  },
  {
    email: "user2@example.com",
    username: "abcuser",
    password: "pass1234",
  },
  {
    email: "user3@example.com",
    username: "user_xyz",
    password: "1234pass",
  },
  {
    email: "user4@example.com",
    username: "user789",
    password: "testpass",
  },
  {
    email: "user5@example.com",
    username: "userxyz123",
    password: "password12",
  },
  {
    email: "user6@example.com",
    username: "abc123",
    password: "testpass1",
  },
  {
    email: "user7@example.com",
    username: "user7_xyz",
    password: "12345pass",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
