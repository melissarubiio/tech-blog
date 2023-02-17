const sequelize = require('../config/connection');
const seedUser = require('./user-seed');
const seedBlog = require('./blog-seed');
const seedComment = require('./comment-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlog();

  await seedComment();

  process.exit(0);
};

seedAll();