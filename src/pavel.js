(function (global) {
	'use strict';

	var pavel = function () {
		console.log('hello');
    };

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