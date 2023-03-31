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

const getUsers = async (_req, res) => {
  try {
    const allUsers = await userService.getUsers();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    return res.status(200).json({ message: 'Usuário deletado' });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = {
  authenticateUser,
  createUser,
  getUsers,
  deleteUser,
};