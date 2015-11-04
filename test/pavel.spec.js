
var expect = require("chai").expect;
var pavel = require("../src/pavel");

describe("Pavel", function() {

    it("should see pavel", function() {

    	expect(pavel).to.be.a('function');
    });

    it("should see pavel return true", function() {

    	expect(pavel()).to.equal(true);
    });
});
