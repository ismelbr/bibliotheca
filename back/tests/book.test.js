const request = require('supertest');
const app = require('../app.js');
const fs = require('fs');
const { removeAllBooks } = require('../db/models/books');
const jwt = require('jsonwebtoken');

const username = 'fulano';

describe('Books', () => {
  beforeAll(() => {
    const verify = jest.spyOn(jwt, 'verify');
    verify.mockImplementation(
      jest.fn((token, secretOrPublicKey, callback) => callback(null, { username })),
    );
  });

  beforeEach(async () => {
    await removeAllBooks();
  });

  it("should add a new book to the user's", async () => {
    const res = await request(app)
      .post('/api/books')
      .set({ 'x-access-token': 'token' })
      .send({ username: username, title: 'Crime and Punishment' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title');
  });

  it('shouldnt be able to add twice the same book', async () => {
    await request(app)
      .post('/api/books')
      .set({ 'x-access-token': 'token' })
      .send({ username: username, title: 'Crime and Punishment' });

    const res = await request(app)
      .post('/api/books')
      .set({ 'x-access-token': 'token' })
      .send({ username: username, title: 'Crime and Punishment' });
    expect(res.statusCode).toEqual(409);
  });
});
