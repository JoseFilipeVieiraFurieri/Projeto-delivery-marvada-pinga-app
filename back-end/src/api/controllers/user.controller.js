const { findAll } = require('../services/user.service');

const getUsers = async (req, res) => {
  const allUsers = await findAll();
  return res.status(200).json(allUsers);
};

module.exports = {
  getUsers,
};