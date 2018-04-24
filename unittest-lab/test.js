const assert = require('assert');
const should = require('should');
const request = require('supertest');
const { add } = require('./add.test');
const { objType } = require('./object.test');
const { asyncfunc } = require('./async.test');
const app = require('./router.test');

// assert
describe('Math', function() {
	describe('#add()', function() {
		// it('should return 10', function() {
		// 	assert.equal('10', add(5, 5, 5));
		// });

		it('should return 0', function() {
			assert.equal('0', add());
		});
	});
});

// should
describe('Type', function() {
	describe('#objType()', function() {
		it('object should return an object', function() {
			should(objType({ name: 'test' })).be.a.Object();
		});

		it('date should return an object', function() {
			should(objType(new Date())).be.a.Object();
		});

		it('reg should return an object', function() {
			should(objType(/^a/)).be.a.Object();
		});
	});
});

// async
describe('Async', function() {
	describe('#asyncfunc()', function() {
		it('should wait 100 ms', function(done) {
			asyncfunc(done);
		});
	});
});

// router
describe('GET /user', function() {
	it('should resonse as username with password', function(done) {
		request(app)
			.get('/user')
			.expect('Content-Type', 'application/json; charset=utf-8')
			.expect(200, { name: 'username', password: 'password' }, done);
	});
});
