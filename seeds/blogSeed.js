//setup the seed object for the blogs
const { Blog } = require('../models');

const blogData = [
  {
    title: 'What is Web Development?',
    content: 'Web development involves creating the visual layout of a website or web application, programming the functionality and interactivity of the site, managing databases and servers, and ensuring that the website or application is optimized for speed, security, and search engine rankings. This often involves using various tools and technologies such as HTML, CSS, JavaScript, and various web frameworks and content management systems.',
    user_id: 1
}
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;