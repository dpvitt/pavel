
module.exports = pavel;

var carouselFn = require('./modules/carousel.js');

function pavel() {

	return {
		testMethod: testMethod,
		carousel: carouselFn
	};

	function testMethod() {

		console.log('called the test method');
		return true;
	}
}
