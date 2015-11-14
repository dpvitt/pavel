
var helpers = require('./helpers.js');

module.exports = function(selector) {

	forEachCarousel(helpers.findElements(document, selector));
}

function forEachCarousel(elements) {

	for (var i = 0; i < elements.length; i++) {

		removePlaceholderImg(elements[i]);
		addCarouselComponentsToDOM(elements[i]);
		addInteractionsToAllCarousels(elements[i], 3);
	}
}

function removePlaceholderImg(element) {

	helpers.removeElement(element, 'img');

	return element;
}

function addCarouselComponentsToDOM(element) {

	helpers.addToDOM([
		buildThisCarousel(element),
		buildThisCarouselControls()
	], element);

	return element;
}

function buildThisCarousel(element) {

	var imgBase = element.dataset.carouselImgBase,
		imgArray = helpers.splitBy(element.dataset.carouselImgOpts, ', '),
		imgWidth = element.dataset.carouselImgWidth,
		imgHeight = element.dataset.carouselImgHeight;

	return buildImgs(imgBase, imgArray, imgWidth, imgHeight);
}

function buildImgs(imgBase, imgArray, imgWidth, imgHeight) {

	var imgsString = '<ul class="carousel-item-holder list-reset" data-current-item="0">';

	for (var i = 0; i < imgArray.length; i++) {

		imgsString += '<li class="carousel-item ',
		imgsString += addDefaultVisibilityToFirstImage(i) +'">',
		imgsString += buildThisImg(imgBase, imgArray[i], imgWidth, imgHeight),
		imgsString += '</li>';
	}

	imgsString += '</ul>';

	return imgsString;
}

function buildThisImg(imgBase, imgSrc, imgWidth, imgHeight) {

	var iterationString = '';

	iterationString += '<img class="full-width-image" ',
	iterationString += 'src="'+ imgBase + imgSrc +'" ',
	iterationString += 'width="'+imgWidth+'" height="'+imgHeight+'" />';

	return iterationString;
}

function addDefaultVisibilityToFirstImage(i) {

	var visibleState = 'carousel-item-hide';

	if (i === 0) {
		visibleState = 'carousel-item-show'
	}

	return visibleState;
}

function buildThisCarouselControls() {

	var controlsString = '<div class="carousel-control-holder">';
		controlsString += '	<button class="carousel-control carousel-prev" type="button">skip to previous slide</button>',
		controlsString += '	<button class="carousel-control carousel-next" type="button">skip to next slide</button>',
		controlsString += '</div>';

	return controlsString;
}

function addInteractionsToAllCarousels(element, length) {

	var nextItem = helpers.findElements(element, '.carousel-next'),
		prevItem = helpers.findElements(element, '.carousel-prev'),
		holder = helpers.findElements(element, '.carousel-item-holder'),
		current = 1;

	nextItem[0].addEventListener('click', function() {

		switchActiveCarouselItem(1);
    });

	prevItem[0].addEventListener('click', function() {

		switchActiveCarouselItem(-1);
	});

	function switchActiveCarouselItem(direction) {

	    current = current + direction;

	    if (current === length + 1) {
	    	current = 1;
	    }

	    if (current === 0) {
	    	current = length;
	    }

	    toggleCarouselClasses(element, current);
	}
}

function toggleCarouselClasses(element, current) {

	var hiddenClass = 'carousel-item-hide',
	    activeClass = 'carousel-item-show',
	    activeEl = helpers.findElements(element, '.carousel-item-show'),
	    newEl = helpers.findElements(element, 'li:nth-child('+ current +')');

	helpers.removeClass(activeEl, activeClass);
	helpers.addClass(activeEl, hiddenClass);

	helpers.removeClass(newEl, hiddenClass);
	helpers.addClass(newEl, activeClass);
}

