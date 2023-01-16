const request = require('supertest');
const app = require('../app.js');
const fs = require('fs');
const { removeAllUsers } = require('../db/models/users');

describe('User authentication', () => {
  beforeAll(async () => {
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
      .send({ username: 'reader2', password: 'goodreader' });

    const res = await request(app)
      .post('/api/auth/register')
      .send({ username: 'reader2', password: 'goodreader' });
    expect(res.statusCode).toEqual(409);
  });
});
