const seedBlogPosts = require("./blogpost-seeds");
const seedComment = require("./comment-seeds");
const seedUser = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedBlogPosts();
  console.log("\n----- BLOG POSTS SEEDED -----\n");

  await seedComment();
  console.log("\n----- COMMENTS SEEDED -----\n");

  await seedUser();
  console.log("\n----- USERS SEEDED -----\n");

  process.exit(0);
};

seedAll();
