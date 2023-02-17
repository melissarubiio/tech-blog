const { Comment } = require('../models');

const commentData = [
  {
    comment: 'I just learned about this in my class!',
    user_id: 1,
    blog_id: 1
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;