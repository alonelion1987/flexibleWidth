;
(function () {
    var version = 1.0;
    /*
     * основная функция
     * возвращает number
     * @param {string} c         Класс элементов
     * @param {number} cols      Кол-во генерируемых колонок
     * @return {number}          кол-во обработанных элементов elementsLength
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
            throw new Error('Количество дочерних элементов .'
            + elements[0].className
            + ' в контейнере '
            + container
            + ' не совпадает с общим количеством данных элементов на странице');
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
<<<<<<< HEAD
                if (cols && cols != 1)
                    elements[i].style.float = 'left';
=======
                elements[i].style.float = 'left';
>>>>>>> f63147d12626adcf7fe018ec45bb52459c076538
            }
            for (var i = 1; i < cols; i++) {
                var lastClear = container.lastChild;
                container.removeChild(lastClear);
            }
            return elementsLength;
        }
    }

    /*
     * экспорт в глобальный объект
     * вызов:
     * _$_(class, column)
     *  *************************
     * */
    window._$_ = flexibleWidth;
})();