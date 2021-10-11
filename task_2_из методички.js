// 1. Оператор if проверяет условие, что в глобальной области window нет "a".
// Переменная "а" объявлена в локальной области конструкции if, следовательно alert |==> undefind
if (!("a" in window)) {
    var a = 1;
}
alert(a);

// 2. Ошибка, переменная "а" не объявлена в глобальной области видимости.
var b = function a(x) {
    x && a(--x);
};
alert(a);

// 3. Здесь, при объявлении функции в области видимости происходит объявение переменной "а" со значеним функции.
// При создании переменной "а" мы не присваиваем ей значение, alert |==> function a(x){return x * 2;}
// Если перемменной "а" мы присвоим значение, то присвоение будет иметь приоритет.
function a(x) {
    return x * 2;
}
var a;
alert(a);

// 4. Аргументы функции - тот же массив, второму элементу в теле функции присвоили значение 10,
// его и выкинул alert |==> 10.
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

// 5. метод call в качестве агрумента получил null, вызываемая функция ссылается на глобальный объект
// window.a, в котором null |==> вывод [obgect Window]
function a() {
    alert(this);
}
a.call(null);