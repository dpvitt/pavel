
var expect = require("chai").expect,
	helpers = require("../js/modules/helpers"),
	jsdom = require("jsdom");

describe.only("Helpers", function() {

	var document;

	jsdom.env({
		file: './examples/index.html',
		done: function (errors, window) {
			document = window.document;
		}
	});

	describe("Find Elements", function() {

		it('should throw an error if called with the incorrect amount of arguments', function () {

			expect(function() {
				helpers.findElements('selector')
			}).to.throw('should be called with the correct amount of arguments');
		});

		it('should find our elements', function () {

			expect(helpers.findElements(document.body, 'h1').length).to.equal(1);
		});

		it('should not find our elements', function () {

			expect(helpers.findElements(document.body, 'table').length).to.equal(0);
		});

	});

	describe("Remove Element", function() {

		it('should throw an error if called with the incorrect amount of arguments', function () {

			expect(function() {
				helpers.removeElement('selector')
			}).to.throw('should be called with the correct amount of arguments');
		});

		it('should remove the element from the DOM', function () {

			helpers.removeElement(document.body, 'h1');
			expect(helpers.findElements(document.body, 'h1').length).to.equal(0);
		});
	});

	describe("Split By", function() {

		it('should throw an error if called with the incorrect amount of arguments', function () {

			expect(function() {
				helpers.splitBy(',')
			}).to.throw('should be called with the correct amount of arguments');
		});

		it('should split a string into an array', function () {

			expect(helpers.splitBy('1,2,3', ',')).to.deep.equal(['1', '2', '3']);
		});
	});
});
