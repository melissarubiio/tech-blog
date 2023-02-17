const { User } = require('../models');

const userData = [
    {
        username: 'Felix',
        password: 'pewds123'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;