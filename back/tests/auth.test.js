const request = require('supertest');
const app = require('../app.js');
const fs = require('fs');
const { removeAllUsers } = require('../db/models/users');
const jwt = require('jsonwebtoken');
const db = require('../db/index.js');
const { generateAccessToken } = require('../controllers/authControllers.js');
const bcrypt = require('bcryptjs');

const username = 'fulano';

describe('User authentication', () => {
  beforeAll(() => {
    const verify = jest.spyOn(jwt, 'verify');
    verify.mockImplementation(
      jest.fn((token, secretOrPublicKey, callback) => callback(null, { username })),
    );
  });

  beforeEach(async () => {
    await removeAllUsers();
  });

  it('should be able to create a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ username: 'reader1', password: 'goodreader' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('username');
    expect(res.body).toHaveProperty('accessToken');
  });

  it('shouldnt be able to create the same user twice', async () => {
    await request(app)
      .post('/api/auth/register')
      .send({ username: 'reader1', password: 'goodreader' });

    const res = await request(app)
      .post('/api/auth/register')
      .send({ username: 'reader1', password: 'goodreader' });
    expect(res.statusCode).toEqual(409);
  });

  it('shouldnt be able to change password without token', async () => {
    const res = await request(app)
      .post('/api/auth/password')
      .set({ abcd: 'token' })
      .send({ username: username, oldPassword: 'nopassword', newPassword: 'nada' });
    expect(res.statusCode).toEqual(403);
  });

  it('should be able to change password', async () => {
    await db.users.addUser(username, bcrypt.hashSync('nopassword', 8));
    const token = generateAccessToken(username);
    const res = await request(app)
      .post('/api/auth/password')
      .set({ 'x-access-token': token })
      .send({ username: username, oldPassword: 'nopassword', newPassword: 'nada' });
    expect(res.statusCode).toEqual(200);
  });
});
