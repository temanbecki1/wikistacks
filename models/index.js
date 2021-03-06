const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false,
});

const User = db.define("user", {
  name: { type: Sequelize.STRING, allowNull: false },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true,
    unique: true,
  },
});

const Page = db.define("page", {
  title: { type: Sequelize.STRING, allowNull: false, unique: true },
  slug: { type: Sequelize.STRING, allowNull: false },
  content: { type: Sequelize.TEXT, allowNull: false },
  status: Sequelize.ENUM("open", "closed"),
});

module.exports = {
  db,
  User,
  Page,
};
