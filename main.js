
// // Function Expression
// let sum = function(a, b) {
//     return a + b;
//};

// //Function Declaration
// function sum(a, b) {
//     return a + b;
// }

// Никогда не добавляйте перевод строки между return и его значением

// function showMessage(userName, say = 'default') {
//     alert(userName + ' ' + say);
// }
// showMessage('Иван', 'привет');
// если не передать в функцию второй аргумент то будет Иван default

// интересное поведение switch (true)
// let day = +prompt('День недели','');
// switch (true) {
//     case day <= 10:
//         alert ('Первая декада');
// Объяснение---
//switch (expression) 
//(expression) Выражение, значение которого сравнивается со всеми случаями.

// в конструкции switch всегда проверяется строгое равенство === 
// 1 и '1' не равны!

// проверку на NaN в цикле нужно проводить первую

// Вызов break/continue возможен только внутри цикла, и метка должна находиться где-то выше этой директивы.

// из цикла можно выйти директивой break;
// итерацию цикла можно пропустить директивой continue;
// с тернарным оператором ? вызовет ошибку!

// цепочка ИЛИ "||" возвращает первое истинное значение или последнее, если такое значение не найдено.
// цепочка И "&&" возвращает первое ложное значение или последнее, если все значения были истиными.
// И возвращает первое ложное значение, а ИЛИ – первое истинное.


// при делении на 0 = infinity

// alert автоматически преобразует любое значение к строке. 
// Математические операторы преобразуют значения к числам.

/* обратные ковычки
let str = "Привет";
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
*/

/* Пробельные символы, 
такие как \t и \n по краям строки игнорируются
*/

/* преобразование
String( str ); к строке
Number( str ); к числу
Boolean ( str ); булево значение
*/

/*Инкремент/декремент можно применить только к переменной.
Попытка использовать его на значении, типа 5++, приведёт к ошибке.*/

// Особенности языка
// при нестрогом равенстве null == undefined / true
// при строгом равенстве null === undefined / false

"use strict";

// let str = "Привет";
// let phrase = `Обратные кавычки позволяют встраивать переменные и выражения ${str} ${2 + 2}`;
// console.log( phrase );


// let user = "mark", age = "25", sex = "men";
// alert (age + ' ' + user + ' '+ sex);

// let admin, name;
// name = 'John';
// admin = name;
// alert( admin );

// alert ( typeof 10 );

// let value = true;
// alert( typeof value );

// value = String ( value );
// alert( typeof value );

// let str = '123';
// alert( typeof str );

// str = Number( str );
// alert( str );

// let value = true;
// alert (typeof value);
// value = String(value);
// alert (typeof value);

// let age = prompt ('Введите Ваш возраст','');
// let accesAllowed = (age > 18) ? true : false;
// alert (accesAllowed)

// let age = prompt ('Введите Ваш возраст','');
// let message = ( age < 18 ) ? 'Привет маллыш':
// ( age >= 18 && age < 35 ) ? 'Привет парняга':
// ( age > 35 && age < 100 ) ? 'Добрый день судрь':
// ( age > 100 ) ? 'Да пиздишь':
// 'что-то не то';
// alert (message);

// let howAreYou = prompt ('Скажи как твои дела', '');
// (howAreYou == 'норм') ? alert ('Отлично') : alert ('Держись');

// let nameJs = prompt ('Какое «официальное» название JavaScript?', '');
// if (nameJs == 'ECMAScript') {
//     alert ('Верно');
// } else {
//     alert ('Не знаете? ECMAScript');
// }

// let num = prompt ('Введите Ваше число','');
// if ( num > 0 ) {
//     alert ('Вы ввели больше 0 Вам 1');
// } else if ( num < 0 ){
//     alert ('Вы ввели меньше 0 Вам -1')
// } else if ( num == 0 ) {
//     alert ('Вы ввели 0 Вам 0')
// } else {
//     alert ('Вводите только число')
// };

// let a = 2, b = 5;
// let result = ( a + b < 4 ) ? 'Мало' : 'Много';
// alert (result);

// let login = prompt ('Введите пользователя','');
// let message = (login == 'Сотрудник') ? 'привет':
// (login == 'Директор') ? 'Здравствуйте':
// (login == '') ? 'нет логина':
// 'Введите существующий логин';
// alert (message);

// var x = 10, y = 7;
// let result = ( x > y) ? 'x больше y': 'x не больше y';
// alert (result);

// ----- посчитали сразу в alert
// var x = 10, y = 7;
// alert ( (x > y) ? 'x больше y': 'x не больше y'); 

// let num = prompt ('введите число','');
// alert( (num % 2) ? `число ${num} не четное` : `число ${num} четное`);

// let num = prompt( 'Введите Ваше число','');
// alert( 
//     (num > 0 && num < 10) ? `число ${num} однозначное положительное`:
//     (num >= 10 && num < 100) ? `число ${num} двузначное положительное`:
//     (num >= 100 && num < 1000) ? `число ${num} трехзначное положительное`:
//     (num < 0 && num > -10) ? `число ${num} однозначное отрицательное`:
//     (num <= -10 && num > -100) ? `число ${num} двузначное отрицательное`:
//     (num <= -100 && num > -1000) ? `число ${num} трехзначное отрицательное`: 'Введите число'
// );


// let a = prompt ("Введите число а",'');
// let b = prompt ("Введите число б",'');
// let c = prompt ("Введите число в",'');
// if (a > b && a > b) {
//     alert (`Число a = ${a} больше чем б и в`);
// } else if (b > a && b > c) {
//     alert (`Число б = ${b} больше чем а и в`);
// } else {
//     alert (`Число в = ${c} больше чем а и б`);
// };

// let currentUser = null;
// let defaultUser = 'John';
// // defaultUser = '';
// let nameUser = currentUser || defaultUser || 'unname';

// alert (nameUser);

// let age = prompt ('data', '16');
// if (age >= 14 && age <= 90);
// if ( !(age >= 14 && age <= 90) ) {
//     alert ('не находится')
// };
// if ( age < 14 || age > 90 ) {
//     alert ('не находятся')
// }

// let login = prompt ('Введите логин','');

// if (login === 'Админ') {
//     let pass = prompt ('Введите пароль','');
//     if (pass === 'Я главный') {
//         alert ('Здравствуйте');
//     } else if (pass === null) {
//         alert ('Отменено');
//     } else {
//         alert ('Не верный пароль');
//     }
// } else if (login === null || login === '') {
//     alert ('Отменено')
// } else {
//     alert ('Я Вас не знаю')
// };

// let i = 0;
// while (i < 3) {
//     alert (i);
//     i++;
// }

// let i = 3;

// while (i) {
//     alert (i);
//     i--;
// };

// let i = 0;

// do {
//     alert (i);
//     i++;
// } while (i < 5);

// let i;

// for (i = 0; i < 6; i++) {
//     alert(i);
// }
// alert (i);

// let sum = 0;
// outer: while (true) {
//     let value = +prompt ('Введи число','');
//     if (!value) {
//         break outer;
//     }
//     sum += value;
// };
// alert (`Сумма введеного = ${sum}`);

// for (let i = 0; i < 10; i++) {
//     if (i % 2) {
//         alert (i);
//     }
// };

// outer: for (let i = 0; i < 3; i++) {
//     for (let j= 0; j < 3; j++){
//         let input = prompt(`Значение на координатах (${i}, ${j})`,'1');
//         if (!input) {
//             break outer;
//         }
//     }
// }
// alert ('Готово');

// for (let i = 2; i < 11; i++ ) {
//     if( !(i % 2) ) {
//         alert (i);
//     }
// }

// let i = 0;
// while ( i < 3 ) {
//     alert ('number ' + i++);
// };


// while (true) {
//     let num = prompt ('Введите число больше 100','');
//     if (num > 100 || num === null) break;
// }

// let i = +prompt ('Первое число','1');
// let j = +prompt ('Конечное число', '6');
// let sum = 0;

// for (i; i <= j; i++) {
//     if( i % 2 != 0) {
//         sum += i;
//     } else {
//         continue;
//     }
// }
// alert (sum);

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log (`${i} + ${j} = ${i + j}`);
//     } console.log(' ');
// }

// let a = 2 + 2;
// switch (a) {
//     case +'1': // групируем case 1 и case 2
//     case +'2':
//         alert ('Мало');
//         break;
//     case +'3':
//         alert ('Мало');
//         break;
//     case +'4':
//         alert ('В точку');
//         break;
//     default:
//         alert ('Другое значение');
// }

// let browser = prompt ('Какой вы используете браузер','');
// if (browser === 'Edge') {
//     alert ('Используешь Edge');
// } else if (browser === 'Chrome' || browser === 'Safari' || browser === 'Opera' || browser === 'Firefox') {
//     alert ('Ок, это тоже не плохой браузер')
// } else {
//     alert ('Используй один из браузеров')
// }

// let num = +prompt ('Введите число между 0 и 3','');
// switch (num) {
//     case 0:
//     case 1:
//         alert (`Вы ввели число ${num}`);
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может 3')
// }

// let day = +prompt('День недели','');
// switch (true) {
//     case day <= 10:
//         alert ('Первая декада');
//         break;
//     case day > 10 && day <=20:
//         alert ('Вторая декада');
//         break;
//     case day > 20 && day <= 31:
//         alert ('Третья декада');
//         break;
//     default:
//         alert('Не определенная декада');
// }

// function showMessage () {
//     let message = 'Привет'; // видна только внутри функции
//     alert (message);
// }

// showMessage ();


// let userName = 'Ford';

// function showMessage() {
//     let message = `Привет ${userName}`;
//     alert (message);
// }

// function changeName() {
//     userName = 'Ваня';
// }

// showMessage();
// changeName();
// showMessage();

// function showMessage(userName, say = 'default') {
//     alert(userName + ' ' + say);
// }
// showMessage('Иван', 'привет');


// let age = prompt ('Сколько вам лет','');

// function checkAge (age) {
//     if ( age > 18 ) {
//         return true;
//     } else {
//         return confirm ('Родители разрешили?');
//     }
// }

// if ( checkAge(age) ) {
//     alert ('Доступ разрешен');
// } else {
//     alert ('Доступ закрыт');
// }

// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       alert(i);  // простое
//     }
//   }
  
//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }
// showPrimes(10);

// function checkAge(age) {
//     return age > 18 ? true : confirm ('Родители разрешили?'); 
// }

// checkAge(10);

// function checkAge(age) {
//     return age > 18 || confirm ('Родители разрешили?'); 
// }

// function min(a,b) {
//     return (a < b) ? a : b; 
// }
// alert (min(3,7));

// function pow(x, n) {
//     x = +prompt ('Введите X','');
//     n = +prompt ('Введите N','');
//     return (n < 1) ? alert('Введите натуральное число','') : alert (x ** n);
// }

// pow();

// function sayHello () {alert ('Привет');};

// alert (sayHello);

// function ask (question, yes, no) {
//     return (confirm(question)) ? yes() : no();
// }

// function showOk() {
//     alert('Вы согласны');
// }

// function showCancel() {
//     alert('Вы отменили выполнение');
// }

// ask('Вы согласны?', showOk, showCancel);

// function ask(question, yes, no) {
//     return confirm(question) ? yes() : no ();
// }
// ask ('Вы согласны?',
//     function() {alert('Вы согласились');},
//     function() {alert('Вы отказались');}
// );

// sayHi('Вася');

// function sayHi(name) {
//     alert(`Привет ${name}`);
// }
// let sayHi = function(name) {alert('Привет' + name);}
// sayHi('Вася');

// function ask(question, yes, no) {
//     return confirm (question) ? yes (): no ();
// };

// let showOk = function () {alert ('Ok')}; 
// let showCancel = function () {alert ('Cancel')};
// ask ('Вы голодны?', showOk, showCancel);