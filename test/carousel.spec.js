
var expect = require("chai").expect,
	carousel = require("../js/modules/carousel"),
	jsdom = require("jsdom");

describe("Carousel", function() {

	var window,
		document,
		bodyContents;

	describe("Initialise", function() {

		it("should see initialise property", function() {

			expect(carousel).to.have.property('initialise');
		});

		it("should throw an error if the method is called without a selector", function() {

			expect(function(){
				carousel.initialise()
			}).to.throw('initialise the method with an element selector');
		});
	});

	describe("Build Images", function() {

		it('should construct a correctly formatted unordered list with 2 images', function () {

			var correctFormat = '<ul class="carousel-item-holder list-reset" data-current-item="0">';
			correctFormat += '<li class="carousel-item carousel-item-show"><img class="full-width-image" src="assets/1.jpg" width="5" height="5" />',
			correctFormat += '</li><li class="carousel-item carousel-item-hide"><img class="full-width-image" src="assets/2.jpg" width="5" height="5" /></li>',
			correctFormat += '</ul>';

			expect(carousel.buildImgs('assets/', ['1.jpg', '2.jpg'], 5, 5))
				.to.equal(correctFormat);
		});
	});

	describe("Build Image Element", function() {

		it('should throw an error if the method is called with the incorrect amount of arguments', function () {

			expect(function(){
				carousel.buildThisImg(1, 2, 3)
			}).to.throw('incorrect amount of arguments');
		});

		it('should return a correctly formatted image object', function () {

			expect(carousel.buildThisImg('assets/', 'img.jpg', '10', '10'))
				.to.equal('<img class="full-width-image" src="assets/img.jpg" width="10" height="10" />');
		});

		it('should not return a correctly formatted image object', function () {

			expect(carousel.buildThisImg('assets/', 'img2.jpg', '10', '10'))
				.to.not.equal('<img class="full-width-image" src="assets/img.jpg" width="10" height="10" />');
		});
	});

	describe("First Image Visiblity", function(){

		it('should return a visible state if the index is 0', function () {

			expect(carousel.addDefaultVisibilityToFirstImage(0))
				.to.equal('carousel-item-show');
		});

		it('should return a hidden state if the index is not 0', function () {

			expect(carousel.addDefaultVisibilityToFirstImage(1))
				.to.equal('carousel-item-hide');
		});
	});

	describe('Build The Carousel Controls', function () {

		it('should see all the components that make up the controls', function () {

			expect(carousel.buildThisCarouselControls())
				.to.contain('carousel-control-holder');

			expect(carousel.buildThisCarouselControls())
				.to.contain('carousel-prev');

			expect(carousel.buildThisCarouselControls())
				.to.contain('carousel-next');
		});
	});

	beforeEach(function () {

		jsdom.env({
			file: './examples/index.html',
			done: function (errors, window) {
				window = window;
				document = window.document;
				bodyContents = document.body.innerHTML;
			}
		});
	});
});
