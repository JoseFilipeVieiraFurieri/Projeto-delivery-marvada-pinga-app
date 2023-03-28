const userService = require('../services/user.service');

const authenticateUser = async (req, res) => {
  try {
    const allUsers = await userService.authenticateUser(req.body);
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const createdUser = await userService.createUser(req.body);
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = {
  authenticateUser,
  createUser,
};