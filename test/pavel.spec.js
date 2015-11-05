
var expect = require("chai").expect;
var pavel = require("../src/pavel");

describe("Pavel", function() {

	var pavelConstructor;

    it("should see pavel", function() {

    	expect(pavelConstructor.testMethod).to.be.a('function');
    });

    it("should see pavel return true", function() {

    	expect(pavelConstructor.testMethod()).to.equal(true);
    });

    beforeEach(function () {

    	pavelConstructor = pavel();

    });

});
