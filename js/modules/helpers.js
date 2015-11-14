
module.exports = {

	findElements: findElements,
	removeElement: removeElement,
	addToDOM: addToDOM,
	splitBy: splitBy,
	addClass: addClass,
	removeClass: removeClass
}

function findElements(context, selector) {

	return context.querySelectorAll(selector);
}

function removeElement(context, selector) {

	var nodeToRemove = this.findElements(context, selector);
	context.removeChild(nodeToRemove[0]);

	return context;
}

function addToDOM(additions, element) {

	for (var i = 0; i < additions.length; i++) {

		element.insertAdjacentHTML('afterbegin', additions[i]);
	}

	return element;
}

function splitBy(string, opt) {

	return string.split(opt);
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
