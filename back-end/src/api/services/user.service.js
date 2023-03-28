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

module.exports = {
  authenticateUser,
};
