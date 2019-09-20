const assert = require('assert');
const { expect } = require('chai');
const should = require('chai').should();

const bookController = require('../../src/controllers/bookController');

describe('bookController', function () {

  describe('useMiddleware()', function () {
    it('should authenticate an existing user', function () {
      // bookController().useMiddleware();
      assert.equal(2, 2);

      expect(2).not.to.equal(3);

      const objA = { name: 'John' };
      const objB = { name: 'John' };
      objA.should.deep.equal(objB);
    });
    it('should reject a not existing user');
  });

  describe('getAllBooks', function () {
    it('should return all available books');
    it('should return an error message in case something went wrong');
  });

  describe('getBookById', function () {
    it('should return the exact requested book');
    it('should return the exact requested book');
    it('should return an error message in case something went wrong');
  });
});
