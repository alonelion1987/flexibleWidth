# flexibleWidth.js
**Версия 1.0**
---
![гибкая ширина блоков](https://zharikov.site/wp-content/uploads/2016/04/flexibleWidth-2.png)
Скрипт предназначен для равномерного распределения блоков по ширине родительского контейнера. В качестве контейнера может выступать любой блок как определенной ширины, так и неопределенной, вплоть до `<body>`.

Главное условие: все элементы с идентифицирующим классом должны быть внутри родительского контейнера

**не требует jQuery**

Что умеет?

1. Нарезать блоки на одинаковую ширину в зависимости от заданного количества колонок
2. Генерировать нужное количество колонок
3. Проставлять clearfix после оканчивающей ряд колонки, чтобы вовремя отменить обтекание
4. Удалять лишние clearfix

### Установка
---
`<script src="...flexibleWidth.js"></script>`

### Вызов
---
`window.onload = function () { _$_('className', count); }`

Если на странице уже имеется событие загрузки, то нужно просто включить в него `_$_('className', count);`

*className* - (string) класс элементов, который нужно равномерно распределить по ширине

*count* - (number) число колонок / если нет, то будет работать как count=1

FAQ

 - **Как задать равномерные отступы между блоками?**
 - Здесь также ничего сложного нет: в каждом блоке создаем `div` и задаем ему внешние отступы, например `margin:0 15px`, для красоты можно сделать рамку с внутренними отступами `padding`
 - **Как это работает?**
 - Механизм такой: так как каждый блок нарезается на определенную ширину, выраженную в %, то внутренний `div` с внешними отступами будет создавать смещение от внешних границ блока тем самым создавая одинаковые отступы. Ширина каждого блока так же будет одинакова для всех. Подробнее можно разобрать demo
 - **Что если у меня адаптивная верстка, умеют ли блоки подстраиваться под разл. разрешения?**
 - Над этим идет работа. Скорее всего скоро будет версия 1.1

--- 

![Вызов функции](https://zharikov.site/wp-content/uploads/2016/04/flexibleWidthCode.png)
[Посмотреть на jsfiddle.net] (https://jsfiddle.net/alonelion1987/toy71Lax/8/)
