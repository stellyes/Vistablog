const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

// Set up express instance and port
const app = express();
const PORT = process.env.PORT || 3001;

// Apply necessary middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Attach routes to server
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
