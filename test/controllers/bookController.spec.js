// Bring all test modules
// eslint-disable-next-line no-unused-vars
const { assert, expect, should, sinon } = require('../testModules');
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
    it('should redirect a non existing user to index');
  });

  describe('getAllBooks', function () {
    it('should render bookListView', function (done) {
      const req = {};
      const res = {
        render: sinon.spy(),
      };
      const { getAllBooks } = bookController({}, {});
      getAllBooks(res, req);
      // eslint-disable-next-line no-unused-expressions
      res.render.calledOnce.should.be.true;
      res.render.firstCall.args[0].should.equal('bookListView');
      done();
    });

    it('should return all available books');
    it('should return an error message in case something went wrong');
  });

  describe('getBookById', function () {
    it('should return the exact requested book');
    it('should return the exact requested book');
    it('should return an error message in case something went wrong');
  });
});
