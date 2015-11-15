
var expect = require("chai").expect;
var carousel = require("../js/modules/carousel");

describe("Carousel", function() {

	describe("Initialise", function() {

		it("should see initialise property", function() {

			expect(carousel).to.have.property('initialise');
		});

		it("should see initialise throw an error if the method is called without a selector", function() {

			expect(carousel.initialise).to.throw('initialise the method with an element selector');
		});
	});
});
