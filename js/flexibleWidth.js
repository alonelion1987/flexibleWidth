;
(function () {
    var version = 1.0;
    /*
     * main function flexibleWidth()
     * return number
     * @param {string} c         Class elements
     * @param {number} cols      Number generated columns
     * @return {number}          Number processed items elementsLength
     * */
    function flexibleWidth(c, cols) {
        var elements = document.getElementsByClassName(c),
            elementsLength = elements.length,
            container = elements[0].parentNode,
            clears = document.getElementsByClassName('flexiblewidth__clear' + c);
        for (var i = 0, j = 0; i < container.childNodes.length; i++) {
            if (container.childNodes[i].className !== c)
                continue;
            j++;
        }
        if (elementsLength !== j) {
            console.log('Error flexibleWidth.js __line 20: Number of child elements .'
            + c
            + ' in container '
            + container
            + ' It does not coincide with the total number of data items per page');
            return;
        } else if (cols > j) {
            console.log('Error flexibleWidth.js __line 27: The number of columns ' + cols +
            ' generated by the large number of items .' + c + ' per page');
            return;
        } else {
            container.style.overflow = 'hidden';
            if (clears.length) {
                while (clears.length > 0) {
                    for (var i = 0; i < clears.length; i++) container.removeChild(clears[i]);
                }
                for (var i = 0; i < j; i++) reset(elements, i);
            }
            for (var i = 0; i < j; i++) {
                if (cols) {
                    if (i && i < (j - 1) && cols != 1) {
                        var clear = document.createElement("div"),
                            beforeE = elements[i * cols],
                            clearfix = container.insertBefore(clear, beforeE || null);
                        cl(clearfix, c);
                    }
                }
                calc(elements, i, cols);
            }
            if (cols && cols != 1) {
                if (!clears.length) {
                    for (var i = 1; i < cols - 1; i++) rm(container);
                } else {
                    for (var i = 2; i < cols - 1; i++) rm(container);
                }
                if (j / cols < 2) {
                    if (j - cols <= 1) rm(container); else for (var i = 0; i <= 1; i++) rm(container);
                } else {
                    if (!clears.length) {
                        for (var i = 0; i <= 2; i++) rm(container);
                    } else {
                        for (var i = 0; i <= 1; i++) rm(container);
                    }
                }
            }
            if (cols && cols != 1) {
                clearfix = container.insertBefore(document.createElement("div"), elements.lastChild || null);
                cl(clearfix, c);
            }
            return j;
        }
    }

    /*
     * make flexibility width
     * */
    function calc(elements, i, cols) {
        elements[i].style.width = 100 / cols + '%';
        if (cols && cols != 1)
            elements[i].style.float = 'left';
    }

    function reset(elements, i) {
        elements[i].style.width = '';
        elements[i].style.float = 'none';
    }

    /*
     * create clear
     * */
    function cl(el, cl) {
        el.style.clear = 'both';
        el.className = 'flexiblewidth__clear' + cl;
    }

    /*
     * remove last clear
     * */
    function rm(container) {
        var lastClear = container.lastChild;
        container.removeChild(lastClear);
    }

    /*
     * exports to the global object
     * call:
     * _$_(class, column)
     *  *************************
     * */
    window._$_ = flexibleWidth;
})();