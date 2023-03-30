const md5 = require('md5');
const { User } = require('../../database/models');
const ErrorWithStatus = require('../utils/ErrorWithStatus');
const { generateToken } = require('../utils/JWT');

const authenticateUser = async ({ email, password }) => {
  const convertedPassword = md5(password);
  const allUsers = await User.findOne({ 
    where: { email, password: convertedPassword },
    attributes: { exclude: ['password', 'id'] },
  });
  if (!allUsers) throw new ErrorWithStatus('Usuário não encontrado', 404);
  const token = generateToken(allUsers.dataValues);
  return {
    ...allUsers.dataValues,
    token,
  };
};

const createUser = async ({ name, email, password, role }) => {
  const convertedPassword = md5(password);
  console.log(role);
  const [user, created] = await User.findOrCreate({
    where: { email, name },
    defaults: {
      name,
      password: convertedPassword,
      role: role || 'customer',
    },
  });
  if (!created) throw new ErrorWithStatus('Usuário já existente', 409);
  const token = generateToken(user.dataValues);
  return {
    name,
    email,
    role: user.dataValues.role,
    token,
  };
};

module.exports = {
  authenticateUser,
  createUser,
};
