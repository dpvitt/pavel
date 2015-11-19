
module.exports = {

	findElements: findElements,
	removeElement: removeElement,
	splitBy: splitBy,
	addToDOM: addToDOM,
	addClass: addClass,
	removeClass: removeClass
}

function findElements(context, selector) {

	if (arguments.length !== 2) {
		throw 'should be called with the correct amount of arguments';
	}

	return context.querySelectorAll(selector);
}

function removeElement(context, selector) {

	if (arguments.length !== 2) {
		throw 'should be called with the correct amount of arguments';
	}

	var nodeToRemove = this.findElements(context, selector);
	context.removeChild(nodeToRemove[0]);
}

function splitBy(string, opt) {

	if (arguments.length !== 2) {
		throw 'should be called with the correct amount of arguments';
	}

	return string.split(opt);
}

function addToDOM(additions, element) {

	for (var i = 0; i < additions.length; i++) {

		element.insertAdjacentHTML('afterbegin', additions[i]);
	}
}

function addClass(elements, className) {

	for (var i = 0; i < elements.length; i++) {

		elements[i].classList.add(className);
	}
}

function removeClass(elements, className) {

	for (var i = 0; i < elements.length; i++) {

		elements[i].classList.remove(className);
	}
}
