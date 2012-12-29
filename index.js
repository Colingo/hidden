/*global document*/
var support = "hidden" in document.documentElement

module.exports = hidden

function hidden(elem, value) {
    if (arguments.length === 1) {
        return support ? isHidden(elem) : isHiddenShim(elem)
    }

    support ? setHidden(elem, value) : setHiddenShim(elem, value)
}

function isHidden(elem) {
    return elem.hidden
}

function isHiddenShim(elem) {
    return elem.style.display === 'none';
}

function setHidden(elem, value) {
    elem.hidden = value;
}

function setHiddenShim(elem, value) {
    elem.style.display = value ? "none" : "block"
}
