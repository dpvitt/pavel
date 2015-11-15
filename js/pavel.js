
module.exports = pavel;

var carouselModule = require('./modules/carousel.js');

function pavel() {

	return {
		carousel: carouselModule.initialise
	};
}
