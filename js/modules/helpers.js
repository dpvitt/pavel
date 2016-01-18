
module.exports = {

	findElements: findElements,
	removeElement: removeElement,
	splitBy: splitBy,
	addToDOM: addToDOM,
	addClass: addClass,
	removeClass: removeClass,
	setAttributeTo: setAttributeTo,
	throwArgumentLengthError: throwArgumentLengthError
}

function throwArgumentLengthError(actualLength, expectedLength) {

	if (actualLength !== expectedLength) {
		throw 'should be called with the correct amount of arguments';
	}
}

function findElements(context, selector) {

	throwArgumentLengthError(arguments.length, 2);

	return context.querySelectorAll(selector);
}

function removeElement(context, selector) {

	throwArgumentLengthError(arguments.length, 2);

	var nodeToRemove = this.findElements(context, selector);
	context.removeChild(nodeToRemove[0]);
}

function splitBy(string, opt) {

	throwArgumentLengthError(arguments.length, 2);

	return string.split(opt);
}

function addToDOM(additions, element) {

	for (var i = 0; i < additions.length; i++) {

		if (element.insertAdjacentHTML) {
			element.insertAdjacentHTML('afterbegin', additions[i]);
		} else {
			element.innerHTML += additions[i];
		}
	}
}

function addClass(elements, newClassName) {

	throwArgumentLengthError(arguments.length, 2);

	for (var i = 0; i < elements.length; i++) {

		if (elements[i].classList) {
			elements[i].classList.add(newClassName)
		} else {
			elements[i].className += ' ' + newClassName;
		}
	}
}

function removeClass(elements, oldClassName) {

	throwArgumentLengthError(arguments.length, 2);

	for (var i = 0; i < elements.length; i++) {

		if (elements[i].classList) {
			elements[i].classList.remove(oldClassName);
		} else {
			var reg = new RegExp('(\\s|^)' + oldClassName + '(\\s|$)');
			elements[i].className = elements[i].className.replace(reg, ' ');
		}
	}
}

function setAttributeTo(element, attr, state) {

	element[0].setAttribute(attr, state);
}
