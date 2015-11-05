(function (global) {
	'use strict';

	var pavel = function() {

		return {
			testMethod: testMethod
		}

		function testMethod() {

			console.log('called the test method');

			return true;
		}

    }

    /////

	if (typeof define === 'function' && define.amd) {

		define(function () { return pavel; });

	} else if (typeof exports !== 'undefined') {

        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = pavel;
        }

        exports.pavel = pavel;

	} else {

		global.pavel = pavel;
    }

})(this);