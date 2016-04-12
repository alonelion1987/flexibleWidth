;
(function () {
    var version = 1.0;
    /*
     * main function flexibleWidth( )
     * return number
     * @param {string} c         Class elements
     * @param {number} cols      Number generated columns
     * @return {number}          Number processed items elementsLength
     * */
    function flexibleWidth(c, cols) {
        var elements = document.getElementsByClassName(c),
            elementsLength = elements.length,
            container = elements[0].parentNode;
        for (var i = 0, j = 0; i < container.childNodes.length; i++) {
            if (container.childNodes[i].className !== c)
                continue;
            j++;
        }
        if (elementsLength !== j) {
            throw new Error('Number of child elements .'
            + elements[0].className
            + ' in container '
            + container
            + ' It does not coincide with the total number of data items per page');
        } else {
            container.style.overflow = 'hidden';
            for (var i = 0; i < j; i++) {
                if (cols) {
                    if (i && i < (j - 1) && cols != 1) {
                        var clear = document.createElement("div"),
                            beforeE = elements[i * cols],
                            clearfix = container.insertBefore(clear, beforeE || null);
                        clearfix.style.clear = 'both';
                    }
                }
                elements[i].style.width = 100 / cols + '%';
                if (cols && cols != 1)
                    elements[i].style.float = 'left';
            }
            for (var i = 1; i < cols; i++) {
                var lastClear = container.lastChild;
                container.removeChild(lastClear);
            }
            return elementsLength;
        }
    }
    /*
     * exports to the global object
     * call:
     * _$_(class, column)
     *  *************************
     * */
    window._$_ = flexibleWidth;
})();