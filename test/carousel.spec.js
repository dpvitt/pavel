
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

	describe("Build images", function() {

		it('should throw an error if the method is called with the incorrect amount of arguments', function () {

			expect(function(){
				carousel.buildImgs(1, 2, 3)
			}).to.throw('should be called with the correct amount of arguments');
		});

		it('should construct a correctly formatted unordered list with 2 images', function () {

			var correctFormat = '<ul role="listbox" class="carousel-item-holder list-reset" data-current-item="0">';
			correctFormat += '<li role="option" tabindex="0" aria-selected="false" class="carousel-item carousel-item-show"><img class="full-width-image" src="assets/1.jpg" width="5" height="5" />',
			correctFormat += '</li><li role="option" tabindex="-1" aria-selected="false" class="carousel-item carousel-item-hide"><img class="full-width-image" src="assets/2.jpg" width="5" height="5" /></li>',
			correctFormat += '</ul>';

			expect(carousel.buildImgs('assets/', ['1.jpg', '2.jpg'], 5, 5))
				.to.equal(correctFormat);
		});
	});

	describe("Build image element", function() {

		it('should throw an error if the method is called with the incorrect amount of arguments', function () {

			expect(function(){
				carousel.buildThisImg(1, 2, 3)
			}).to.throw('should be called with the correct amount of arguments');
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

	describe("First image visiblity", function(){

		it('should return a visible state if the index is 0', function () {

			expect(carousel.addDefaultVisibilityToFirstImage(0))
				.to.equal('carousel-item-show');
		});

		it('should return a hidden state if the index is not 0', function () {

			expect(carousel.addDefaultVisibilityToFirstImage(1))
				.to.equal('carousel-item-hide');
		});
	});

	describe('Build the carousel controls', function () {

		it('should see all the components that make up the controls', function () {

			expect(carousel.buildThisCarouselControls())
				.to.contain('carousel-control-holder');

			expect(carousel.buildThisCarouselControls())
				.to.contain('carousel-prev');

			expect(carousel.buildThisCarouselControls())
				.to.contain('carousel-next');
		});
	});

	describe('Current state of the carousel', function () {

		it('should be able to increment our carousel', function () {

			carousel.setCurrent(1);
			expect(carousel.slideCarouselTo(1, 3)).to.equal(2);
		});

		it('should reset our carousel to the first item', function () {

			carousel.setCurrent(3);
			expect(carousel.slideCarouselTo(1, 3)).to.equal(1);
		});

		it('should be able to decrement our carousel', function () {

			carousel.setCurrent(2);
			expect(carousel.slideCarouselTo(-1, 3)).to.equal(1);
		});

		it('should reset our carousel to last item', function () {

			carousel.setCurrent(1);
			expect(carousel.slideCarouselTo(-1, 3)).to.equal(3);
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
