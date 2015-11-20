
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

function addClass(elements, newClassName) {

	for (var i = 0; i < elements.length; i++) {

		if (elements[i].classList) {
			elements[i].classList.add(newClassName)
		} else {
			elements[i].className += ' ' + newClassName;
		}
	}
}

function removeClass(elements, oldClassName) {

	for (var i = 0; i < elements.length; i++) {

		if (elements[i].classList) {
			elements[i].classList.remove(oldClassName);
		} else {
			var reg = new RegExp('(\\s|^)' + oldClassName + '(\\s|$)');
			elements[i].className = elements[i].className.replace(reg, ' ');
		}
	}
}
