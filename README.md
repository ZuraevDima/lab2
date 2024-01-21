___
# МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ПРОФЕСИОНАЛЬНОГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»
### ***<center>Лабораторная работа №2. «Основы языка JavaScript».</center>*** <br><p align="right">Подготовил студент направления подготовки 01.03.02 «Прикладная математика и информатика»<br> Института естественных наук и техносферной безопасности<br> Зураев Дмитрий Бакенович.</p><br><p align="right">Научный руководитель:<br> Соболев Евгений Игоревич</p><br> <center>Южно-Сахалинск 2023 г.</center>
___
### <center>Введение</center>
<p align="justify">JavaScript (JS) - это высокоуровневый язык программирования, который используется для создания интерактивных и динамических веб-страниц. JS является одним из трех основных языков, используемых веб-браузерами (наряду с HTML и CSS), и позволяет добавлять функциональность и взаимодействие на веб-страницах.
Лабораторная работа по JavaScript (JS) предоставляет возможность познакомиться с одним из самых популярных языков программирования, используемых для разработки веб-приложений.</p>

### <center>Цели</center>
<p align="justify">В этой лабораторной работе я закрепил навыки работы с переменными и базовыми преобразованиями с ними, также повторил темы по геометрии</p>

### <center>Задачи</center>
<p align="justify">Применить технологию JS.</p>

____________________
## <center>_Решение_</center>
1.Что выведет этот скрипт?
```javascript
let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
```
```js
let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello I1ya
```
2. Создайте страницу, которая спрашивает имя у пользователя и выводит его.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Имя</title>
</head>
<body>
    <script>  
        var userName = prompt("Здравствуй дорогой читатель! Введите ваше имя: ");
        alert("Привет, " + userName);
    </script>
</body>
</html>
```
3.Чему будут равны переменные a, b, c и d в примере ниже?
```js
let a = 1, b = 1;
let c = ++a; // ?
let d = b++; // ?
```
```javascript
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1
console.log("c = " + c);
console.log("d = " + d);
```
4. Чему будут равны переменные a и x после исполнения кода в примере ниже?
```javascript
let a = 2;
let x = 1 + (a *= 2);
```
```js
let a = 2;
let x = 1 + (a *= 2);
console.log("a = " + a, " ", "x = " + x); // a = 4 x = 5 
```
5. Какой результат будет у выражений ниже?<br>
"" + 1 + 0<br>
"" - 1 + 0<br>
true + false<br>
6 / "3"<br>
"2" * "3"<br>
4 + 5 + "px"<br>
"$" + 4 + 5<br>
"4" - 2<br>
"4px" - 2<br>
7 / 0<br>
"  -9  " + 5<br>
"  -9  " - 5<br>
null + 1<br>
undefined + 1<br>
" \t \n" – 2<br>
```javascript
console.log("" + 1 + 0); //10
console.log("" - 1 + 0); // -1
console.log( true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // $45
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log(7 / 0); // Infinity
console.log("  -9  " + 5); // "  -9  5"
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -2
```
6. Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму. Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию). В чём ошибка? Исправьте её. Результат должен быть 3.
```javascript
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(a + b); // 12
```
```js
let a = parseInt(prompt("Первое число?", 1));
let b = parseInt(prompt("Второе число?", 2));
alert(a + b); // 3
```
7.  Вывести на экран число Пи с точностью до сотых.
```javascript
let pi = Math.PI.toFixed(2);
console.log(pi);
```
8. Составить программу вывода на экран числа, вводимого с клавиатуры. Выводимому числу должно предшествовать сообщение "Вы ввели число".
```javascript
var number = prompt("Привет, Введите число:");
alert("Вы ввели число:");
alert(number);
```
9. Составить программу вывода на экран числа, вводимого с клавиатуры. После выводимого числа должно следовать сообщение " - вот какое число Вы ввели".
```javascript
var number = prompt("Введите число:");
alert(number + " - вот какое число Вы ввели");
```
10. Дана сторона квадрата. Найти его периметр
```javascript
var sqSide = 5;
alert(`Периметр квадрата со стороной ${sqSide} см равен ${sqSide*4} см в кв.`);
```
11. Дан радиус окружности. Найти ее диаметр.
```javascript
var cirRad = 5;
alert(`Диаметр окружности при радиусе равном ${cirRad} см равен ${cirRad*2} см`);
```
12. Считая, что Земля — идеальная сфера с радиусом
R 6350 км, определить расстояние до линии горизонта от точки с заданной высотой над Землей
```javascript
var R = 6350; // радиус Земли в км
var h = 100; // высота над Землей в км

var distanceToHorizon = Math.sqrt(2 * R * h + h**2);
alert("Расстояние до линии горизонта " + distanceToHorizon);
```
13. Дана длина ребра куба. Найти объем куба и площадь его боковой поверхности.
```javascript
var a = 5; // длина ребра куба

var volume = Math.pow(a, 3);
var surfaceArea = 6 * Math.pow(a, 2);

alert("Объем куба: " + volume);
alert("Площадь боковой поверхности куба: " + surfaceArea);
```
14. Дан радиус окружности. Найти длину окружности и площадь круга.
```javascript
var radius = 5; 

var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);

alert("Длина окружности: " + circumference);
alert("Площадь круга: " + area);
```
15. Поменять местами значения двух переменных без использования дополнительной переменной.
```javascript
var num1 = 5;
var num2 = 10;
alert(`До того как поменяли num1 = ${num1} num2 = ${num2}`);

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
alert(`Поменяли num1 = ${num1} num2 = ${num2}`);
```
16. Даны два целых числа. Найти: а) их среднее арифметическое; б) их среднее геометрическое.
```javascript
var num1 = 5
var num2 = 3
var arithmeticMean = (num1 + num2) / 2;
alert(`Среднее арифметическое ${num1} и ${num2} = ` + arithmeticMean);
var geometricMean  = Math.sqrt(num1 * num2);
alert(`Среднее геометрическое ${num1} и ${num2} = ` + geometricMean);
```
17. Известны объем и масса тела. Определить плотность материала этого тела. 
```javascript
var volume = 20;
var mass = 65;
var density = mass / volume;
alert(`${density} - равна плотность материала этого тела с объёмом равным ${volume} и массой равной ${mass}`);
```
18. Известны количество жителей в государстве и площадь его территории. Определить плотность населения в этом государстве.
```javascript
var population = 7_888_000_000;
var area = 149_939_063; 
var populationDensity = population / area;
alert(`Плотность населения при количестве жителей ${population} и площади ${area} = ` + populationDensity);
```
19. Даны катеты прямоугольного треугольника. Найти его гипотенузу. 
```javascript
var a = 3; 
var b = 4; 

var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

alert(`Гипотенуза прямоугольного треугольника при катетах ${a} и ${b} равна ${c}`);
```
20. Найти площадь кольца по заданным внешнему и внутреннему радиусам.
```javascript
var R = 8; // внешний радиус
var r = 5; // внутренний радиус

var area = Math.PI * (Math.pow(R, 2) - Math.pow(r, 2));

alert(`Площадь кольца по заданным внешнему ${R} и внутреннему радиусу ${r} равна ${area}.`);

```
21. Даны катеты прямоугольного треугольника. Найти его периметр. 
```javascript
var a = 3; 
var b = 4; 

var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

alert(`Периметр прямоугольного треугольника при катетах ${a} и ${b} равна ${c}`);
```
22. Даны основания и высота равнобедренной трапеции. Найти ее периметр.
```javascript
var a = 5; // первое основание
var b = 7; // второе основание
var c = 4; // высота

var perimeter = a + b + 2 * c;

alert(`Периметр равнобедренной трапеции при длине основания ${a} и ${b} и высоте ${c} равнобедренной трапеции равен ${perimeter}`);
```
## <center>_Вывод_</center>
Таким образом, благодаря этим упражнениям, мне удалось вспомнить и применить геометрические формулы для решения задач, также удалось поработать с переменными в языке JavaScript.