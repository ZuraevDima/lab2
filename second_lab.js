//1
let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello I1ya

//3
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1
console.log("c = " + c);
console.log("d = " + d);

//4
let a = 2;
let x = 1 + (a *= 2);
console.log("a = " + a, " ", "x = " + x); // a = 4 x = 5 

//5
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

//6
let a = parseInt(prompt("Первое число?", 1));
let b = parseInt(prompt("Второе число?", 2));
alert(a + b); // 3

//7
let pi = Math.PI.toFixed(2);
console.log(pi);

//8
var number = prompt("Привет, Введите число:");
alert("Вы ввели число:");
alert(number);

//9
var number = prompt("Введите число:");
alert(number + " - вот какое число Вы ввели");

//10
var sqSide = 5;
alert(`Периметр квадрата со стороной ${sqSide} см равен ${sqSide*4} см в кв.`);

//11
var cirRad = 5;
alert(`Диаметр окружности при радиусе равном ${cirRad} см равен ${cirRad*2} см`);

//12
var R = 6350; // радиус Земли в км
var h = 100; // высота над Землей в км

var distanceToHorizon = Math.sqrt(2 * R * h + h**2);
alert("Расстояние до линии горизонта " + distanceToHorizon);

//13
var a = 5; // длина ребра куба

var volume = Math.pow(a, 3);
var surfaceArea = 6 * Math.pow(a, 2);

alert("Объем куба: " + volume);
alert("Площадь боковой поверхности куба: " + surfaceArea);

//14
var radius = 5; 

var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);

alert("Длина окружности: " + circumference);
alert("Площадь круга: " + area);

//15
var num1 = 5;
var num2 = 10;
alert(`До того как поменяли num1 = ${num1} num2 = ${num2}`);

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
alert(`Поменяли num1 = ${num1} num2 = ${num2}`);

//16
var num1 = 5
var num2 = 3
var arithmeticMean = (num1 + num2) / 2;
alert(`Среднее арифметическое ${num1} и ${num2} = ` + arithmeticMean);
var geometricMean  = Math.sqrt(num1 * num2);
alert(`Среднее геометрическое ${num1} и ${num2} = ` + geometricMean);

//17
var volume = 20;
var mass = 65;
var density = mass / volume;
alert(`${density} - равна плотность материала этого тела с объёмом равным ${volume} и массой равной ${mass}`);

//18
var population = 7_888_000_000;
var area = 149_939_063; 
var populationDensity = population / area;
alert(`Плотность населения при количестве жителей ${population} и площади ${area} = ` + populationDensity);

//19
var a = 3; 
var b = 4; 

var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

alert(`Гипотенуза прямоугольного треугольника при катетах ${a} и ${b} равна ${c}`);

//20
var R = 8; // внешний радиус
var r = 5; // внутренний радиус

var area = Math.PI * (Math.pow(R, 2) - Math.pow(r, 2));

alert(`Площадь кольца по заданным внешнему ${R} и внутреннему радиусу ${r} равна ${area}.`);

//21
var a = 3; 
var b = 4; 

var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

alert(`Периметр прямоугольного треугольника при катетах ${a} и ${b} равна ${c}`);

//22
var a = 5; // первое основание
var b = 7; // второе основание
var c = 4; // высота

var perimeter = a + b + 2 * c;

alert(`Периметр равнобедренной трапеции при длине основания ${a} и ${b} и высоте ${c} равнобедренной трапеции равен ${perimeter}`);