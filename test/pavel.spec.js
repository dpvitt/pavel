
var expect = require("chai").expect;
var pavel = require("../js/pavel");

describe("Pavel", function() {

	var pavelConstructor;

	it("should see pavel testMethod", function() {

		expect(pavelConstructor.testMethod).to.be.a('function');
	});

	it("should see pavel testMethod return true", function() {

		expect(pavelConstructor.testMethod()).to.equal(true);
	});

	beforeEach(function () {

		pavelConstructor = pavel();

	});

});
