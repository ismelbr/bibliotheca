const { JsonDB, Config } = require('node-json-db');

const users = new JsonDB(
  new Config(`${process.env.DB_PATH}/users-${process.env.NODE_ENV || ''}`, true, false, '/'),
);

const addUser = async (username, password) => {
  await users.push(`/${username}`, { username, password });
};

const getUser = async (username) => {
  let user;
  try {
    user = await users.getData(`/${username}`);
  } catch (error) {}
  return user;
};

const removeAllUsers = async () => {
  await users.push('/', {});
};

module.exports = {
  addUser,
  getUser,
  removeAllUsers,
};
