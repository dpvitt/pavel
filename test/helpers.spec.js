
var expect = require("chai").expect,
	helpers = require("../js/modules/helpers"),
	jsdom = require("jsdom");

describe("Helpers", function() {

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

	describe("Add Class", function() {

		it('should throw an error if called with the incorrect amount of arguments', function () {

			expect(function() {
				helpers.addClass('newClassName')
			}).to.throw('should be called with the correct amount of arguments');
		});

		it('should add a class to an element', function () {

			var element = helpers.findElements(document.body, '.full-width-image'),
				classToAdd = 'another-class';

			helpers.addClass(element, classToAdd);

			expect(helpers.findElements(document.body, '.full-width-image')[0].className)
				.to.contain(classToAdd);
		});
	});

	describe("Remove Class", function() {

		it('should throw an error if called with the incorrect amount of arguments', function () {

			expect(function() {
				helpers.addClass('newClassName')
			}).to.throw('should be called with the correct amount of arguments');
		});

		it('should add a class to an element', function () {

			var element = helpers.findElements(document.body, '.full-width-image'),
				classToRemove = 'another-class';

			helpers.removeClass(element, classToRemove);

			expect(helpers.findElements(document.body, '.full-width-image')[0].className)
				.to.not.contain(classToRemove);
		});
	});

	describe('Add to DOM', function () {

		it('should add these components to the DOM', function () {

			var element = helpers.findElements(document.body, '.hero');

			helpers.addToDOM([
				'<p>paragraph</p>',
				'<p>another paragraph</p>'
			], element);

			expect(element.innerHTML)
				.to.contain('<p>paragraph</p>');
			expect(element.innerHTML)
				.to.contain('<p>another paragraph</p>');
		});
	});

	describe('Set Attribute on Element', function () {

		it('should set an attribute on an element', function () {

			var element = helpers.findElements(document.body, '.hero');

			helpers.setAttributeTo(element, 'aria-selected', true);

			expect(element[0].getAttribute('aria-selected')).to.equal('true');
		});
	});
});
