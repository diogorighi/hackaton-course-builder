const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('localhost:3000');

describe('Courses', () => {
  it('Should return a 200 response', done => {
    api.get('/course/')
      .set('Accept', 'application/json')
      .expect(200, done);
  });
});
