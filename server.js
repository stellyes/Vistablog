const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const handlebars = require("express-handlebars");

// Set up express instance and port
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to our database
const sess = {
  secret: "VistaBlog",
  cookie: {
    // Two weeks before login expires
    maxAge: 1209600000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

// Apply necessary middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Attach routes to server
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
