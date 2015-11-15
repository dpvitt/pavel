
var expect = require("chai").expect,
	pavel = require("../js/pavel");

describe("Pavel", function() {

	var pavelConstructor;

	it("should see pavel's carousel property", function() {

		expect(pavelConstructor).to.have.property('carousel');
	});

	beforeEach(function () {

		pavelConstructor = new pavel();
	});

});
