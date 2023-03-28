const { User } = require('../../database/models');

const findAll = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

module.exports = {
  findAll,
};
