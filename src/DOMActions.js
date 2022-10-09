const _getDOMElem = id => {
    return document.getElementById(id);
}

export const mapListDOMElements = listOfID => {
    const _viewElems = {};

    for (const id of listOfID) {
        _viewElems[id] = _getDOMElem(id);
    }

    return _viewElems;
}