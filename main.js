
// ++++++++++++++++++++++++++++++++
// метод для Map из объекта
// Object.entries(obj);

// метод для объекта из Map
// Object.fromEntries(map);


// Шпаргалка по методам массива:

//+++++++ Для добавления/удаления элементов:
// push (...items) – добавляет элементы в конец,
// pop() – извлекает элемент с конца,
// shift() – извлекает элемент с начала,
// unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.

//++++++ Для поиска среди элементов:
// indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.
// Для перебора элементов:

// forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
// Для преобразования массива:

// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split/join – преобразует строку в массив и обратно.
// reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
// Дополнительно:

// Array.isArray(arr) проверяет, является ли arr массивом.


// Методы

// push(...items)добавляет items в конец массива.
// pop() удаляет элемент в конце массива и возвращает его.
// shift() удаляет элемент в начале массива и возвращает его.
// unshift(...items) добавляет items в начало массива.

// Чтобы пройтись по элементам массива:

// for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со старыми браузерами.
// for (let item of arr) – современный синтаксис только для значений элементов (к индексам нет доступа).
// for (let i in arr) – никогда не используйте для массивов!



// Строки

// str.trim() — убирает пробелы в начале и конце строки.

// для вывода символа строки
// str[0] номерация начинается с 0

// нижний регистр 
// str.toLowwerCase()
// верхний регистр
// str.toUpperCase()

// для поиска подстроки
// str.includes(substr, pos) // возвращает true/false 
// str.indexOf(substr, pos) // возвращает номер позиции или -1 если не находит substr

// вернуть подстроку 
// str.slice(start, end) возвращает символы от start до end
// str.substr(start, length) возвращает с start длиной length 

// коды символов
// str.codePointAt(pos) возвращает код символа из str позиции pos (начало с 0)
// String.fromCodePoint(code) создаёт символ по коду (code)




// Проверка в if
// Просто запомните: if (~str.indexOf(…)) означает «если найдено».

// Методы примитивов

// num.toString(base) возвращает строковое представление числа num в системе счисления base.
// base - 16(цвета(ff)), 2(двоичная), 36(все символы);
// если метод toString() вызывается сразу на числе то ставятся 2-е точки 
// (15466..toString(2)) 

// str.toUpperCase() - возвращает строку в верхнем регистре
// let str = 'Привет';
// alert ( str.toUpperCase() ); // ПРИВЕТ

// toFixed(n) округляет число до n знаков после запятой.
// let n = 1.23456;
// alert( n.toFixed(2) ); // 1.23


// встроенные функции и методы:

// .toString(); - явное преобразование в строку
// id.toString();

// Math.trunc - встроенная функция, которая удаляет десятичную часть
// Math.trunc(49.2);

// Object.assign(dest, [src1, src2, src3...]) // Клонирует или копирует объект и объекты а также Symbol
// let clone = Object.assign( {}, user ); // клонируем user в clone
// let clone = Object.assign( clone, user, user2 ); // копируем значения из user и user2 в clone 



// this
// Функцию, которая является свойством объекта, называют методом этого объекта.



//Преобразование объектов

// obj[Symbol.toPrimitive] = function(hint) {
    // должен вернуть примитивное значение
    // hint равно чему-то одному из: "string", "number" или "default"
// };

// пример:
// let user = {
//     name: "John",
//     money: 1000,
  
//     [Symbol.toPrimitive](hint) {
//       alert(`hint: ${hint}`);
//       return hint == "string" ? `{name: "${this.name}"}` : this.money;
//     }
//   };
  
//   // демонстрация результатов преобразований:
//   alert(user); // hint: string -> {name: "John"}
//   alert(+user); // hint: number -> 1000
//   alert(user + 500); // hint: default -> 1500


// если нет Symbol.toPrimitive

// Методы toString/valueOf
// toString -> valueOf для хинта со значением «string».
// valueOf -> toString – в ином случае.





// Символы

// let id = Symbol('имя - описание');

// Symbol.for(key) // создание глобальных символов
// let id = Symbol.for("имя - описание"); // если символа не существует, он будет создан

// let id = Symbol('имя - описание')
// let user = {[id]: 1}
// alert( id.description ); // имя - описание для любых символов (глобальных и локальных)
// alert(user[id]) // 1


// Symbol.keyFor(sym), наоборот, принимает глобальный символ и возвращает его имя - описание.
// let id = Symbol.for('имя - описание');
// alert( Symbol.keyFor(id) );// имя - описание
// Если символ неглобальный, метод не сможет его найти и вернёт undefined



// Объекты

// Чтобы получить доступ к свойству, мы можем использовать:
// Запись через точку: obj.property.
// Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
// Удаление свойства: delete obj.prop.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for for (let key in obj).

// 'key' in obj
// let key = 'name';
// alert ( key in user ); // выдаст true если есть свойство name в объекте user
// alert ( 'name' in user ) // обращаемся к свойству через двойные ковычки если это не переменная как выше


// Цикл «for…in»
// при переборе не находит Symbol();

// for (let key in user) {
//     console.log (key); // ключи
//     console.log ( user[key] ); // зачение ключей
// }


// Глубокое клонирование (объект с вложенным объектом)

// пример: 
// let user = {
//     name: 'Ivan',
//     sizes: {
//         height: 172,
//         width: 52,
//     }
// }
// alert( user.sizes.height);

// Существует стандартный алгоритм глубокого клонирования, 
// Structured cloning algorithm. Он решает описанную выше задачу, 
// а также более сложные задачи. Чтобы не изобретать велосипед, 
// мы можем использовать реализацию этого алгоритма из 
// JavaScript-библиотеки lodash, метод _.cloneDeep(obj).



// Функции:

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



// Операторы:

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

// let sum = (a, b) => a + b;
// let sum = function (a, b) {
//     return (a + b);
// }

// let sayHi = () => alert ('Hello!');
// sayHi();

// let age = prompt ('Сколько Вам лет','10');
// let welcome = (age < 18) ?
//     () => 'Привет':
//     () => 'Здравствуйте';
// alert (welcome());

// let ask = (question, yes, no) => confirm() ? yes() : no();

// ask ('Вы голодны?',
//     ()=> alert('Вы согласились'),
//     ()=> alert ('Вы не согласились')
// );


// let name = prompt ('Ваше имя','');
// let age = prompt ('Ваш возраст','');
// let sayHi = (age < 18) ? 'Привет': 'Здравствуйте';

// let year = null;
// switch (true) {
//     case (age == '1'):
//         year = 'год';
//         break;
//     case (age > '1' && age < '5'):
//         year = 'года';
//         break;
//     case (age == '0' || age <= '100'):
//         year = 'лет';
//         break;
// }

// let sayHello = (name, age) => `${sayHi} ${name}, ваш возраст ${age} ${year}.`;
// alert(sayHello(name, age));

// let age = prompt ('Сколько Вам лет','10');

// function welcome (age) {
//     return age < 10 ? 'Привет': 'Здравствуйте';
// }

// alert ( welcome() );


// let age = prompt ('Сколько Вам лет','10');

// let welcome = (age < 10) ?
//     () => 'Привет':
//     () => 'Здравствуйте';

// let typeWelcome = (typeof welcome == 'function') ? 'welcome является функцией' : 'welcome не является функцией';
// alert (typeWelcome); 


// Объекты

// let user = {
//     name: 'John',
//     age: 25
// }

// user.isAdmin = true;
// alert( user.age );
// alert ( user.isAdmin );
// delete user.age;
// user.age === undefined ? alert ('удалили свойство age') : alert('проверка не прошла');

// let user = {};
// user['likes birds'] = true;
// alert ( user ['likes birds'] );

// let key = 'likes birds';
// user[key] = true;
// alert ( user[key] );

// let user = {
//     name: 'Joshua',
//     age: 55,
// };

// let key = prompt ('Что вы хотите узнать о пользователе', 'age');
// alert ( user[key] );

// let fruit = prompt ('Какой фрукт купить','apple');

// let bag = {
//     [fruit]: 8,
//     veg: 3,
// }

// alert ( bag.apple );
// alert ( bag['veg'] );

// let fruit = 'apple';
// let bag = {
//     [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

// function makeUser (name, age, sex) {
//     return {
//         name: name,
//         age: age,
//         sex: sex,
//     }
// }

// let user= makeUser ('John', 25, 'men');
// alert ( user.name + ' ' + user.age + ' ' + user.sex);

// let obj = {
//   0: "Тест" // то же самое что и "0": "Тест"
// };

// // обе функции alert выведут одно и то же свойство (число 0 преобразуется в строку "0")
// alert( obj["0"] ); // Тест
// alert( obj[0] ); // Тест (то же свойство)


// let user = {};
// alert ( user.noSuchProperty === undefined ); // обращаемся к несуществующему свойству

// let user = {
//     name: 'Lira', 
//     age: 22,
//     sex: 'women',
// }

// let key = prompt ('Проверка на существование свойства', 'name')
// let output = key in user ? ('Свойство найдено') : 'Свойство не найдено';
// alert ( output );

// let user = {
//     name: 'John',
//     age: 20,
// }

// alert ( 'name' in user );

// let user = {
//     name: 'John',
//     age: 25,
//     isAdmin: true,
// }

// for (let key in user) {
//     // ключи
//     console.log (key);
//     //значение ключей
//     console.log ( user[key] );
// }

// целочисленные имена выводятся по возрастанию, не целочисленные по созданию
// let codes = {
//     "49": "Германия",
//     "41": "Швейцария",
//     "44": "Великобритания",
//     // ..,
//     "1": "США"
// }

// let codes = {
//     49: "Германия",
//     "+41": "Швейцария",
//     "+44": "Великобритания",
//     // ..,
//     "+1": "США"
// }


// for (let code in codes) {
//     alert ( +code + ' ' + codes[code]);
// }

// alert ( String(Math.trunc(Number('49'))) );
// alert ( String(Math.trunc(Number('+49'))) );
// alert ( String(Math.trunc(Number('1.6'))) );

// let user = {};

// user.name = 'NickName';
// user.age = 22;
// user.sex = 'men';
// user['dominant hand'] = 'left';

// for (let key in user) {
//     console.log ( key + ':' + ' ' + user[key] );
// }

// let key = prompt ('', 'name')
// alert (key in user);

// const user = {
//     name: 'Ivan',
//     age: 25,
// }

// for (let key in user) {
//     alert ( key + ':' + ' ' + user[key] );
// }

// let user = {
//     name: "John",
//     age: 30
// };

// let clone = {};
// for (let key in user) {
//     clone[key] = user[key]
// }

// clone.name = 'Ivan';
// alert (clone.name);
// alert (user.name);

// let user = {name: 'John'};
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // копируем все свойства из Permissons1 и 2 в user
// Object.assign( user, permissions1, permissions2 );

// for (let key in user) {
//     if (key == 'name') continue;
//     alert ( key + ':' + ' ' + user[key] );
// }

//добавление и перезапись свойств
// let user = {name: 'John'}
// Object.assign( user, {name: 'Ivan', ['like vodka']: true, isAdmin: true,} );
// // for (let key in user) {
// //     alert ( key + ':' + ' ' + user[key] );
// // }

// клонирование объектов
// let clone = Object.assign( {}, user ); 

// for (let key in clone) {
//     alert ( key + ':' + ' ' + clone[key] );
// }


// Нужно применить метод глубокого клонирования в объекте есть вложенные объекты
// мы можем использовать реализацию этого алгоритма из JavaScript-библиотеки lodash, метод _.cloneDeep(obj).
// let user = {
//     name: 'Ivan',
//     sizes: {
//         height: 172,
//         width: 52,
//     }
// }
// alert( user.sizes.height);

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// let shedule = {
//     // name: 'John',
//     // age: 25,
//     // sex: 'men',
// };

// function isEmpty (obj) {
//     let num = 0;
//     for (let key in obj) {
//         num++;
//     }
//     if (num == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// alert ( isEmpty(shedule) );

// shedule['8:30'] = 'get up';

// alert ( isEmpty(shedule) );

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// alert (sum);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric (obj) {
//     for (let key in obj) {
//         if ( typeof (menu[key]) == 'number' ) {
//             obj[key] = obj[key] * 2;
//         }
//     }
// }

// for (let key in menu) {
//     console.log (key + ':' + ' ' + menu[key])
// }

// multiplyNumeric (menu);

// for (let key in menu) {
//     console.log (key + ':' + ' ' + menu[key])
// }


// Тип данных Symbol

// let id = Symbol('id');
// // .toString() - явное преобразование в строку
// alert( id.toString() ); // Symbol('id');

// .symbol.description вывести только описание
// alert( id.description ); // id


// let id = Symbol('identification');

// let user = {
//     name: 'Ivan',
//     [id]: 1,
// }

// alert ( user[id] ); // значение
// alert ( id.description ); // описание

// let id = Symbol.for('id');

// let idAgain = Symbol.for('id');

// alert (id == idAgain);

// let id = Symbol.for('identification');
// alert( Symbol.keyFor(id) );// identification

// let globalSymbol = Symbol.for('name'); // глобальный символ
// let localSymbol = Symbol('name'); // локальный символ

// alert( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
// alert( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа

// alert ( globalSymbol.description ); // name
// alert ( localSymbol.description ); // name



//Методы объекта 'this'
//Функцию, которая является свойством объекта, называют методом этого объекта.

// let user = {
//     name: 'John',
//     age: 25,
//     sayHi: function () {return 'привет ' + this.name},
// }

// alert ( user.sayHi() );

// let user = {name: 'John'};
// let admin = {name: 'Admin'};

// function sayHi() {
//     return alert( 'Привет ' + this.name );
// }

// user.sayHi = sayHi;
// admin.sayHi = sayHi;

// user.sayHi();
// admin.sayHi();

// for (let key in user) {
//     console.log (key + ':' + ' ' + user[key]);
// }

// let user1 = {
//     name: 'John',
//     age: 25,
//     dateOfBirht: '25.10.2019',
// }

// for (let key in user1) {
//     console.log( user1[key] );
// }

// function updateDate (dateOfBirht) {
//     this.dateOfBirht = dateOfBirht;
// }

// user1.f = updateDate;
// user1.f('24.10.2018');

// for (let key in user1) {
//     console.log( user1[key] );
// }


// Преобразование объектов

// let user = {
//     name: "John",
//     money: 1000,
  
//     [Symbol.toPrimitive](hint) {
//       alert(`hint: ${hint}`);
//       return hint == "string" ? `{name: "${this.name}"}` : this.money;
//     }
//   };
  
//   // демонстрация результатов преобразований:
//   alert(user); // hint: string -> {name: "John"}
//   alert(+user); // hint: number -> 1000
//   alert(user + 500); // hint: default -> 1500

// let user = {
//     name: 'Angel',
//     age: 22,
//     money: 0,
//     happy: 'very',

//     valueOf() {
//         return this.money;
//     },

//     toString() {
//         return this.name;
//     },
    

//     // [Symbol.toPrimitive](hint) {
//     //     alert (hint);
//     //     return hint == 'string' ? this.name : this.age;
//     // },
// }

// alert (user);
// alert (+user);


// Конструктор создания объектов через new;

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.isAdmin = false;
//     this.sayHi = function() {
//         return `Привет, меня зовут - ${this.name}`;
//     } 
// }

// let user = new User('Ivan', 22);

// for (let key in user) {
//     console.log (key + ': ' + user[key]);
// }

// alert ( user.sayHi() );

// let obj = {};

// function A() {
//     return obj;
// }

// function B() {
//     return obj;
// }

// let a = new A;
// let b = new B;

// alert ( a == b );

// function Calculator(){
//     let a = null;
//     let b = null;
//     this.read = function() {
//         a = +prompt ('Введите ваши данные а','');
//         b = +prompt ('Введите ваши данные б','');
//     }
//     this.sum = function() {
//         return a + b;
//     }

//     this.mul = function() {
//         return a * b;
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( `Sum = ${calculator.sum()}` );
// alert( `Mul = ${calculator.mul()}` );

// function Accumulator(startingValue) {
//     this.value = +startingValue;
//     this.read = function () {
//         this.value += +prompt ('Введите Ваше число','');
//     }
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений



// Методы примитивов

// str.toUpperCase() - возвращает строку в верхнем регистре
// let str = 'Привет';
// alert ( str.toUpperCase() ); // ПРИВЕТ

//toFixed(n) округляет число до n знаков после запятой и возращает строку!!!.
// let n = 1.23456;
// alert( n.toFixed(2) ); // 1.23



// Методы числа

// запис 1e6 = 1 * 1 и 6 нулей.
// запис 1e-6 = 1 / 1 и 6 нулей.

// Метод num.toString(base) возвращает строковое представление числа num в системе счисления base.
// let num = 255;
// alert( num.toString(16) ); // 0xff
// alert( num.toString(2) ); // 0b 11111111 для двоичных
// alert( num.toString(8) ); // 0o 377 восьмеричная запись числа

// base = 16 для шестнадцатеричного представления цвета, кодировки символов и т.д., цифры могут быть 0..9 или A..F.
// base = 2  обычно используется для отладки побитовых операций, цифры 0 или 1
// base = 36 максимальное основание, цифры могут быть 0..9 или A..Z. То есть, используется весь латинский алфавит для представления числа.

// если метод toString() вызывается сразу на числе то ставятся 2-е точки 
// alert ( 6..toString(2) );

// Округление

// Math.floor Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
// Math.ceil Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
// Math.round Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.

// let num = 1.2345;
// let result = Math.floor(num * 100) / 100;
// console.log ( result );
// result = num.toFixed(2);
// alert( result ); 

// Проверка: isFinite и isNaN

// isNaN(value) преобразует значение в число и проверяет является ли оно NaN:
// alert( isNaN(NaN) ); // true
// alert( isNaN('str') ); // true
// alert( NaN === NaN ); // false

// isFinite(value) преобразует аргумент в число и возвращает true,
// если оно является обычным числом, т.е. не NaN/Infinity/-Infinity:
// полезно для проверки!!!
// let num = +prompt('a','5');
// if( isFinite(num) && num != null ) {
//     alert (num);
// }
// alert( isFinite('12') ); //true
// alert( isFinite('str') ); //false
// alert( isFinite(Infinity) ); //false

// Сравнение Object.is
// Работает с NaN: Object.is(NaN, NaN) === true
// Значения 0 и -0 разные: Object.is(0, -0) === false, это редко используется, но технически эти значения разные.
// Во всех других случаях Object.is(a, b) идентичен a === b.
// alert ( Object.is(5, 4) === true ); //false
// alert ( Object.is(NaN, NaN) === true ); //true

// parseInt и parseFloat
// alert (parseInt('100px')); //возвращает целое чилсо
// alert (parseFloat('12.5$')); //возвращает число с плавающей запятой
// Функции parseInt/parseFloat вернут NaN, если не смогли прочитать ни одну цифру:
// alert (parseInt('a123px'))// NaN, на первом символе происходит остановка чтения
// не обязательный второй аргумент parseInt(str, radix) radix определяет систему счисления
// alert( parseInt('0xff',16 )) //255
// alert( parseInt('2n9c', 36)) //123456

// alert( (Math.random() * 10).Math.round());
// alert ( Math.round( Math.random() * 10 ) );
// alert (Math.random().toFixed(2) * 100);

// Math.min( a,b,c ) / Math.max( a,b,c ); //возвращает мин и макс аргумент из перечисленных
// alert( Math.min(4, 5, 1, -1) )
// alert( Math.max(5, 8, 9, 15, 55) )

// Math.pow(n, power) возводит число n в степень power
// alert( Math.pow(2, 5) )

// alert( 1.35.toFixed(1) );
// alert( Math.round( (6.35 * 10) ) / 10 );


// function readNumber() {
//     let num = null;
//     do {
//         num = prompt ('data','');
//     } while( !isFinite(num) );
//     if (num == null || num == '') return null;
//     return +num;
// }

// alert (`Число: ${readNumber()}`);

// function random(min, max) {
//     let result = min + Math.random() * (max - min);
//     return Math.round(result);
// }
// alert (random(2, 5));

// function random (min, max) {
//     let result = min + Math.random() * ( (1 + max)- min);
//     return Math.floor(result);
// }
// alert (random(1, 5));


// Строки

// let guestList = `Guest:
// *John
// *Nina
// *Mike
// `;
// alert(guestList);

// let guestList = 'Guest:\n * Peter\n * Rita'
// alert( guestList );

// let str1 = 'Hello\nWorld';
// let str2 = `Hello
// World`;
// alert( str1 == str2 );

// свойство length
// alert( `My\n`.length );//3


// доступ к символам
// let str = 'Hello';

// получаем первый символ
// alert( str[0] );//'H'

// также можно получить с помощью метода charAt(pos);
// alert( str.charAt(0) );'H'

// получаем последний символ
// alert( str[str.length -1] );'o'

// Разница только в том, что если символ с такой позицией отсутствует, 
// тогда [] вернёт undefined, а charAt — пустую строку:
// alert( str[1000] ); //undefined
// alert( str.charAt(100) ); // ''

// for..of
// for (let char of str) {
//     alert( char );
// }

// for (let char of 'What you say mather fucker?') {
//     alert( char );
// }

// let str = 'Долихвать';
// alert (`
//     ${str[2]}
//     ${str[1]}
//     ${str[4]}`
// );

// let str ='Hello Moto';
// for (let char of str) {
//     if (char === ' ') alert ( 'ПРОБЕЛ' );
//     if (char === ' ') continue;
//     alert( char );
// }

// let str = 'Привет Маша';
// for (let i = 0; i < str.length; i++) {
//     if( str[i] == ' ') break;
//     alert( `буква ${str[i]}` );
// }

// function viewStr(str) {
//     let word ='';
//     for (let i = 0; i < str.length; i++) {
//         if( str[i] == ' ') continue;
//         word += `${str[i]}\p`;
//     }
//     return word;
// }

// alert (viewStr('Привет') );



// Изменение регистра
// методы toLowerCase() и toUpperCase() меняют регистр символов
// console.log( 'interface'.toUpperCase() ); //выводит в верхнем регистре
// console.log( 'INTERFACE'.toLowerCase() ); //выводит в нижнем регистре

// для перевода конкретного символа можно обратится к нему по индексу
// console.log( 'Interface'[0].toLowerCase() ); //i



// поиск подстрок

// str.indexOf(substr, pos); ищет substr в str начиная с позиции pos и возвращает позицию, на каторой распологается совпадение, 
// либо -1 при отсутсвии совпадений

// lastIndexOf(substr, position) ищет с конца строки к ее началу)

// let str = 'Привет';
// alert( str.indexOf('Привет') ); //0 потому что строка найдена 
// alert( str.indexOf('ПРИВЕТ') ); //-1 совпадений нет
// alert( str.indexOf('вет') ); //совпадение на 3 позиции

// indexOf в цикле
// let str = 'Ослик Иа-Иа посмотрел на виадук';
// let target = 'Иа'; // цель поиска
// let pos = 0;
// while(true) {
//     let foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;
//     alert( `Найдено тут: ${foundPos}` );
//     pos = foundPos + 1;// начинаем с следующей позиции
// }

// let str = 'Hello Moto';
// let target = 'o';
// let pos = 0;
// while(true) {
//     let foundpos = str.indexOf(target, pos);
//     if (foundpos == -1) break;
//     alert(`Найдено тут ${foundpos}`);
//     pos = foundpos + 1;
// };

// let str = 'Widget with id';
// // if( str.indexOf('Widget') ){
// //     alert( 'Совпадение найдено');
// // }
// // не будет работать! потомучто widget вернет 0 это не true нужно делать провеку на -1;
// if( str.indexOf('Widget') !=-1) {
//     alert(str.indexOf('Widget'));
//     alert('Совпадение найдено!');
// }
// Просто запомните: if (~str.indexOf(…)) означает «если найдено».



// Методы includes, startsWith, endsWith
// str.includes(substr, pos) возвращает true если находит substr и false если не находит
// pos определаяет позицию с которой нужно вести поиск

// Методы str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:
// alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
// alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget


// Получение подстроки
// 3 метода substring, substr, slice - предпочтительнее

// str.slice(start [, end]); возвращает часть строки  от start (не включая) end.
// let str = 'stringfity'
// alert( str.slice(0, 6) );//string
// если end отсутствует slice возвращает все символы до конца с pos
// alert( str.slice(2) );
// Также для start/end можно задавать отрицательные значения. 
// alert( str.slice(-4, -1) ); // fit

// for (let i = -1; i > ~str.length; i--) {
//     alert (str.slice(i));
// }

// let string = str.slice(0, 6);
// alert( string );



// str.codePointAt(pos) метод позволяющий получить код символа
// alert ( 'z'.codePointAt() ); //122
// alert ('9'.codePointAt() );

// String.fromCodePoint(code) // создает символ по его коду

// alert( String.fromCodePoint(122) ); //z

// let str = '';
// for(let i = 65; i <= 220; i++){
//     str += String.fromCodePoint(i); 
// }
// alert( str );


// str.trim() — убирает пробелы в начале и конце строки.

// substr(start, length)	length символов, начиная от start	значение start может быть отрицательным


// function ucFirst(str){
//     str = str.trim();
//     return str[0].toUpperCase() + str.slice(1);
// }
// alert( ucFirst(' привет ') );

// let tar1 = 'viagra';
// let tar2 = 'XXX';

// function checkSpam(str){
//     str = str.toLowerCase();
//     tar1 = tar1.toLowerCase();
//     tar2 = tar2.toLowerCase();
//     return str.includes(tar1) || str.includes(tar2);
// }

// alert( checkSpam('buy ViAgRA now') == true );
// alert( checkSpam('free xxxxx') == true );
// alert( checkSpam("innocent rabbit") == false );


// function truncate(str, maxlength) {
//     if( str.length > maxlength ) {
//         return str.slice(0, maxlength -1) + '\u2026';
//     } else {
//         return str;
//     }
// }

// alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
// alert( truncate("Всем привет!", 20));

// function extractCurrencyValue(str) {
//     return +str.slice(1)
// }

// alert( extractCurrencyValue('$120') === 120 ); // true

// let str = '10$';
// alert( str.slice( 0, str.length - 1 ) );


// function extractCurrencyValue(str){
//     return parseInt(str);
// };
// let tomato = '10$';
// alert( extractCurrencyValue(tomato) );




// Массивы создаются 

// let arr = new Array();
// let arr = [];

// let fruit = ['Яблоко','Картофель', 'Слива', "Ананас", "Груша"];
// alert( fruit[2] ) //слива

// fruit[2] = 'Томат';
// alert( fruit[2] );

// fruit[5] = 'Гранат';
// alert( fruit[5] );

// let user = {
//     name: 'Ivan',
//     age: 22,
// }
// alert( user.name );
// ___________________________________________

// Методы массивов (работа с концом массива)

// pop удаляет последний элемент массива и возвращает его;
// let fruits = ["Яблоко", "Апельсин", "Груша",];
// alert ( fruits.pop() );
// alert( fruits );

// push добавляет элемент в конец массива
// fruits.push('Манго');
// alert( fruits );
// ______________________________________________

// Методы массивов (работа с началом массива)

// shift удаляет из массива первый элемент и выводит его
// alert( fruits.shift() );
// alert( fruits );

// unshift добавляет элемент в начало массива
// fruits.unshift('Крокодил', "Зубокрыл");
// alert( fruits );

// Методы push и unshift могут добавлять сразу несколько элементов:
// __________________________________________________

// let veg = ["Огурец", "Свекла", "Тыква"];
// alert( veg.shift() );
// alert( veg.pop() );
// veg[0] = "Томат";
// alert( veg );

// свойство массива length показывает длину массива + 1
// let arr = [];
// arr[123] = "Яблоко";
// alert( arr.length ); //124

// length можно перезаписать (самый простой способ отчистить массив arr.length = 0)

// многомерный массив
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// alert( matrix[1][1] );//5

// for(let i = 0; i < veg.length; i++){
//     alert( veg[i] );
// }

// for (let item of veg) {
//     alert( item )
// };

// let styles =["Джаз", "Блюз"];
// alert( styles );
// styles.push('Рок-н-Ролл');
// alert( styles );
// let middle = Math.floor(styles.length / 2);
// styles[middle] = 'Классика';
// alert( styles );
// alert( styles.shift() );
// styles.unshift( "Рэп", "Регги" );
// alert( styles );

// function sumInput() {
//     let arr = [];
//     while(true) {
//         let num = prompt("Введите число", "10");
//         if(isNaN(num) == true || num == null || num.trim() == '') break;
//         arr.push(num);
//     }

//     let sum = 0;
//     for( let i = 0; i < arr.length; i++) {
//         sum += +arr[i];
//     }
//     return sum;
// }

// alert( sumInput() );


// Метод arr.splice(str);

// arr.splice(index[, deleteCount, elem1, ..., elemN])
// _______________________________________________

// let arr = ["Я", "изучаю", "JavaScript"];
// arr.splice( 1, 1 ); // удалить с поз 1, 1 элемент (изучаю)
// alert( arr ); //"Я","JavaScript"

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить три первых элемента и заменить их другими
// arr.splice(0, 3, "Давай", "танцевать");
// alert( arr );

// splice может возвращать массив из удаленных объектов
// let removed = arr.splice(0, 2)
// alert( removed );//"Я", "изучаю" - массив удаленных объектов

// splice может вставлять объекты без удаления
// достаточно установить deleteCount в 0;
// arr.splice(2, 0, 'сложный', 'язык')
// alert( arr );

// Отрицательные индексы разрешены

// let arr = [1, 2, 5];
// Начиная с индекса -1 (перед последним элементом)
// Удаляем 0 элементов, добавляем 3, 4
// arr.splice(-1, 0, 3, 4);

// alert( arr );



// Метод arr.slice
// ____________________________________________
// синтаксис arr.slice([start], [end])
// возвращает новый массив! копирует его элементы с start до end не вкл (end)
// значения могут быть отрицательными
// можно полностью скопировать массив для преобразований но без изменений самого массива

// let arr = ['t', 'e', 's', 't'];
// alert( arr.slice(1, 3) ) // e,s
// let copyArr = arr.slice();// создаем копию массива и записываем в переменную
// copyArr.splice(0, 0, 'n', 'e', 'w' );
// alert (copyArr);


// Метод arr.concat
// _______________________________________________
// синтаксис arr.concat(arg1, arg2...);
// создаёт новый массив в который копирует данные из других массивов и доп.знач
// если arg - массив, то все его элементы копируются. Иначе копируется сам аргумент.


// let arr = [1, 2];

// создадим массив из arr и добавим arg [3, 4]
// alert( arr.concat([3,4]) );

// создадим массив из: arr и [3,4], [5,6]
// alert( arr.concat([3,4], [5,6]) );

// создадим массив из arr добавим массив [3, 4] добавим арг 5, 6
// alert( arr.concat([3, 4], 5, 6) );

// !!!!!!! Объекты добавляются как есть!
// let arr = [1, 2];

// let arrayLike = {
//     0: 'Что-то',
//     length: 1,
// };

// alert( arr.concat(arrayLike) ); //1,2,[object Object]

// !!!!! Если объект имеет спецсвойство 
// Symbol.isConcatSpreadable то он обрабатывается concat как массив:
// вместо него добавляются его числовые значения
// для корректной обработки в объекте должны быть числовые свойства и length!

// let arr = [1,2];

// let arrayLike = {
//     0: 'что-то',
//     1: 'еще',
//     [Symbol.isConcatSpreadable]: true,
//     length: 2,
// };

// alert( arr.concat(arrayLike) );



// Метод перебор: forEach
// ____________________________________
// синтаксис arr.forEach(function(item, inddex, array)){
    // что-то делать с item
// }

// выводить alert для каждого элемента
// ['Blue', 'Red', 'Green'].forEach( alert );

// выводить имя и позицию и в каком массиве
// ['Blue', 'Red', 'Green'].forEach((item, index, array) => {
//     alert(`${item} имеет индекс ${index} в массиве ${array}`);
// });

// ["Test"].forEach(function (item, index, array) {
//     alert(`${item} ${index} ${array}`);
// });



// Поиск в массиве методы indexOf/lastIndex и includes
// ___________________________________________________
// Работают также как и строковые
// arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
// arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
// arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.

// let arr = [1, 0, false];

// alert( arr.indexOf(0) ); //1
// alert( arr.indexOf(false) ); //2
// alert( arr.indexOf(null) ); //-1
// alert( arr.includes(null) ); //false
// alert( arr.includes(1) ); //true

// let arr2 = [NaN];
// alert( arr2.includes(NaN) ); //true Правильно обробатывает NaN



// find и findIndex
// _________________
// let result = arr.find(function(item, index, array) {
//     если true - возвращается текущий элемент и перебор прерывается
//     если все итерации оказались ложными, возвращается undefined
// });

// item – очередной элемент.
// index – его индекс.
// array – сам массив.


// let users = [
//     {id: 1, name: 'Ivan'},
//     {id: 2, name: 'Petr'},
//     {id: 3, name: 'Masha'},
// ];

// let user = users.find( item => item.id == 1 );
// alert( user.name );


// for(let i = 0; i < users.length; i++) {
//     if(typeof users[i] == 'object') {
//         for (let key in users[i]) {
//             alert( key + users[i][key] );
//         }
//     }
// };



// filter - для поиска множества элементов,
// возвращает массив из всех подходящих элементов
// _______________________________________

// let user = users.filter( item => item.id < 3 );

// item – очередной элемент.
// index – его индекс.
// array – сам массив.

// alert( user.length );

// for(let i = 0; i < user.length; i++) {
//     if(typeof users[i] == 'object') {
//         for (let key in user[i]) {
//             alert( `${key}: ${user[i][key]}` );
//         }
//     }
// };



// map - преобразование массива.
// _____________________________

// item – очередной элемент.
// index – его индекс.
// array – сам массив.


// let arr = ['Bingo','Pluto','Hard','Metall'];
// let lengths = arr.map( item => item.length );
// alert(lengths);


// sort(fn) сортирует массив на месте (не нужно создавать новую переменную),
// меняя в нем порядок элементов.

// let arr =[1, 2, 3, 4, 5, 11, 12, 13, 6];
// arr.sort();
// alert( arr );

// // напишем фнкцию для сравнения чисел (просто запомнить)!
// // let compare = function(a, b) {
// //     if( a > b ) return 1;
// //     if( a == b) return 0;
// //     if( a < b ) return -1;
// // };
// // или для числовых значений
// let compare = function(a,b) {
//     return a - b;
// }

// более короткая запись с стрелочной функцией
// let compare = (a, b) => a - b;

// alert( arr.sort(compare) ); //отсортировали массив по возрастанию

// let items = [
//     {name: 'Jesica', value: 21},
//     {name: 'Sharpe', value: 22},
//     {name: 'Ziga', value: 23},
//     {name: 'Ivan', value: 12},
// ];

// создадим фун сортировка по имени
// let sortName = function(a, b) {
//     if( a.name > b.name ) return 1;
//     if( a.name < b.name ) return -1;
//     return 0;
// };
// применим функцию
// items.sort(sortName);

// или можно сделать анонимную функцию
// items.sort( (a, b) => {
//     if( a.name > b.name ) return 1;
//     if( a.name < b.name ) return -1;
//     return 0;
// } );

// for( let i = 0; i < items.length; i++ ) {
//     alert( items[i].name );
// };



// reverse - меняет порядок элементов на обратный - меняет массив на месте!!!
// ______________________________________________
// let arr =[1, 2, 3, 4, 5, 7, 9, 12, 6];
// arr.reverse();
// alert( arr );



// split и join
// ____________

// str.split(delim) - разбивает строку (str) на массив по значению (delim)

// let names = 'Вася, Петя, Маша';
// let arr = names.split(',');
// for( let name of arr) {
//     alert( `Сообщение получат: ${name}`);
// }

// не обязательный второй аргумент у метода - ограничение на кол-во эл-в в массиве

// let names = 'Вася, Петя, Маша';
// let arr = names.split(', ', 2);
// for( let name of arr) {
//     alert( `Сообщение получат: ${name}`);
// }


// str.split(s) - с пустым аргументом '' - s разбил бы строку на массив букв
// ---------------------------------------------------------------------
// let str = 'Привет москвичи и москвички';
// let arr = str.toLowerCase().split('');
// alert(typeof arr );


// arr.join(glue) - объеденит массив в строку через glue
// -----------------------------------------------------
// let arr = ['Вася','Петя','Ира','Гена'];
// let str = arr.join('; ');
// alert( str + ' ' + '- ' + typeof str );



// reduce/reduceRight
// -------------------

// let value = arr.reduce(function(previousValue, item, index, array) {
//     // ...
//   }, [initial]);

// previousValue – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
// item – очередной элемент массива,
// index – его индекс,
// array – сам массив.

// let arr = [1, 2, 3, 4, 5];
// alert( arr.reduce((sum, item) => sum + item, 10) ); //10 как первое значение 
// можно не писать, тогда счет начнется с первого знач массива


// Array.isArray - для определения массива
// ---------------------------------------
// let arr = [1, 2, 3];
// alert( Array.isArray(arr) ); //true


// +++++++++++++++++++++++++++++++++++++++

// function camelize( str ) {
//     return str
//     .split('-')
//     .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join('');
// }

// alert (camelize("background-color"));

// ++++++++++++++++++++++++++++++++++++++++
// function filterRange( arr, a, b ) {
//     return arr.filter( item => item = a && item <= b);
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange( arr, 1, 4 );
// alert( filtered );
// alert( arr );
//++++++++++++++++++++++++++++++++++++++++++

// function filterRangeInPlace( arr, a, b ) {
//     for( let i = 0; i < arr.length; i++) {
//         let val = arr[i];
//         if( val < a || val > b ) {
//             arr.splice(i, 1);
//         }
//     }
// };

// let arr = [5, 3, 8, 1];
// filterRangeInPlace( arr, 1, 4 );
// alert( arr );
// +++++++++++++++++++++++++++++++++++++++++

// let arr = [5, 2, 1, -10, 8];
// arr.sort( (a, b) => a - b ).reverse();
// alert( arr );
// +++++++++++++++++++++++++++++++++++++++++

// function compare(a, b) {
//     if( a > b ) return 1;
//     if( a < b ) return -1;
//     return 0;
// };

// function copySorted(arr) {
//     return arr.slice().sort(compare);
// }

// let arr = ['HTML', 'JavaScript', 'CSS'];
// let sorted = copySorted(arr);
// alert( sorted );
// alert( arr );
// +++++++++++++++++++++++++++++++++++++++++++





// Конструктор создания объектов через new;

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.isAdmin = false;
//     this.sayHi = function() {
//         return `Привет, меня зовут - ${this.name}`;
//     } 
// }

// function Calculator(str){
//     return str.split(' ');
// }

// let arr = ['1', '-', '2'];
// for(let i = 0; i < arr.length; i++){
//     let val = arr[i];
//     if( val == '+' ) {
//         let arr2 = arr.slice();
//         arr2.splice(i, 1);
//         let arr3 = arr2.map(item => +item);
//         alert(arr3.reduce( (sum, item) => sum + item) );
//     }
//     if( val == '-' ) {
//     let arr2 = arr.slice();
//     arr2.splice(i, 1);
//     let arr3 = arr2.map(item => +item);
//     alert(arr3.reduce( (sum, item) => sum - item) );
//     }
// };

// alert( arr );

// ======================== это разобрать
// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   }

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   }
// };

// +++++++++++++++++++++++++++++++++++


//  Генераторы (есть метод next() - вызыва)
// синтаксис function* для доступа к yield
// function* strGenerator() {
//   yield 'H'
//   yield 'e'
//   yield 'l'
//   yield 'l'
//   yield 'o'
// }

// const str = strGenerator();

// console.log( str.next() )
// console.log( str.next() )
// console.log( str.next() )
// console.log( str.next() )
// console.log( str.next() )
// console.log( str.next() )

// function* numberGen(n = 10){
//   for(let i = 0; i < n; i++ ) {
//     yield i;
//   }
// }

// let num = numberGen();
// console.log( num.next() );
// console.log( num.next() );

// for( let i of numberGen(7) ){
//   console.log(i);
// }


// const num = numberGen(7);

// console.log( num.next() );


// Генератор без использования функции генератора

// const iterator = {
//   gen(n = 10) {
//     let i = 0
//     return{
//       next() {
//         if (i < n) {
//           return {value: ++i, done: false}
//         }
//         return {value: undefined, done: true}
//       }
//     }
//   }
// }

// let str = [10, 20, 49, 55];

// function* iterator(str) {
//   for(let name of str) {
//     yield name;
//     if(name == 20){
//       return {value: undefined, done: true}
//     }
//   }
// }

// let iter = iterator(str);

// console.log( iter.next() )
// console.log( iter.next() )
// console.log( iter.next() )
// console.log( iter.next() )
// console.log( iter.next() )
// console.log( iter.next() )


// let iterator = {
//   gen(n = 10) {
//     let i = 0;
//     return {
//       next() {
//         if( i < 3) {
//           return {value: i++, done: false};
//         }
//         return {value: undefined, done: true};
//       }
//     }
//   }
// }

// let itr = iterator.gen();
// console.log( itr.next() );
// console.log( itr.next() );
// console.log( itr.next() );
// console.log( itr.next() );
// console.log( itr.next() );
// console.log( itr.next() );
// console.log( itr.next() );


// let iterator = {
//   [Symbol.iterator](n = 10) {
//     let i = 0;
//     return {
//       next() {
//         if( i < 3) {
//           return {value: i++, done: false};
//         }
//         return {value: undefined, done: true};
//       }
//     }
//   }
// }

// for( let k of iterator(4) ) {
//   console.log(k);
// }


// function* iterator(n = 10) {
//   for( let i =0; i < n; i++){
//     yield i;
//   }
// }


// for( let k of iterator(4) ) {
//   console.log(k);
// }



// =================================
// Пербираемые объекты (или итерируемые)

// [Symbol.iterator]()

// let range = {
//     from: 1,
//     to: 5
// }

// range[Symbol.iterator] = function() {
//     return {
//         current: this.from,
//         last: this.to,
//         next() {
//             if( this.current < this.last ) {
//                 return {done: false, value: this.current++}
//             }
//             return {done: true}
//         }
//     }
// }

// for(let num of range) {
//     console.log(num)
// }


// let obj = {
//     start: 2,
//     end: 18
// };

// // obj[Symbol.iterator] = function() {
// //     return {
// //         current: this.start - 2,
// //         last: this.end,
// //         next() {
// //             if(this.current <= this.last) {
// //                 return {value: this.current++, done: false}
// //             }
// //             return {done: true}
// //         }
// //     }
// // }

// for(let k of obj) {
//     console.log(k);
// }

// let range = {
//     from: 1,
//     to: 10,

//     [Symbol.iterator]() {
//         return this;
//     },

//     next() {
//         if(this.from < this.to) {
//             return{value: this.from++, done: false}
//         }
//         return{done: true}
//     }
// }

// for(let k of range ) {
//     console.log(k)
// }

// for(let k of '𝒳😂') {
//     console.log(k)
// }

// интересное применение через while

// let str = 'Hello';

// let iterator = str[Symbol.iterator]();

// while (true) {
//     let result = iterator.next();
//     if(result.done) break;
//     console.log(result.value);
// }



// метод Array.from принимает итерируемые объекты 
// и делает из них массив

// let arrayLike = {
//     1: 'Hello',
//     2: 'World',
//     length: 2
// };

// let arr = Array.from( arrayLike );

// console.log( arr.pop() );


// Пример с итерируемым range

// let range = {
//     from: 1,
//     to: 10,

//     [Symbol.iterator]() {
//         return this;
//     },

//     next() {
//         if(this.from < this.to) {
//             return {value: this.from++, done: false}
//         }
//         return {done: true}
//     }
// }

// // let arr = Array.from(range);
// // console.log(arr);

// let nArr = Array.from(range, num => num ** 3);
// console.log(nArr);


// разбивка строки на массив ее элементов

// let str = 'Яблоко'; 

// let str = '𝒳😂𩷶'; //с сурогатными парами не работает  split

// let arr = Array.from(str);

// let nArr = str.split(''); //с сурогатными парами не работает  split

// console.log(arr);

// console.log(nArr);



//  Map и Set

// Методы и свойства:
// new Map() - создает коллекцию
// map.set(key, value) - записывает по ключу key значение value
// map.get(key) - возвращает значение по ключу key
// map.has(key) - возвращает true, если ключ key присутсвует в коллекции иначе false
// map.delete(key) - удаляет элемент по ключу key
// map.clear() - очищает коллекцию от всех элементов
// map.size - возвращает текущее кол-во эл-в

// let map = new Map();
// map.set( 1, 'str1' );
// map.set( '1', 'num1' );
// map.set( true, 'boolean' );

// console.log( map.get(1) );
// console.log( map.get('1') );
// console.log( map.get(true) );
// console.log( map.size );
// map.clear();
// console.log( map.size );


// объекты в качестве ключей

// let john = {name: 'John'};
// let visitCountMap = new Map();
// visitCountMap.set(john, 123);
// console.log( visitCountMap.get(john) ); //123

// цепочка вызовов map.set()

// map.set(1, 'num1')
//   .set('1','str1')
//   .set(true, 'boolean');

// console.log(map.get(1));
// console.log(map.get('1'));


// перебор по коллекции Map 3 метода
// map.keys() возвращает итерируемый объект по ключам
// map.values() возвращает итерируемый объект по значениям
// map.entries() возвращает итерируемый объект по парам вида [ключ, значение] - используется по умолчание в for..of

// let recipeMap = new Map([
//   ['огурец', 200],
//   ['помидор', 300],
//   ['лук', 600],
// ]);

// // перебор по ключам
// for( let vegetable of recipeMap.keys() ) {
//   console.log(vegetable);
// }

// // перебор по значениям
// for( let amount of recipeMap.values() ) {
//   console.log(amount);
// }

// // перебор по парам [ключ, значение]
// for( let entries of recipeMap ) {
//   console.log( entries );
// }
// // или через метод entries()
// for( let entries of recipeMap.entries() ) {
//   console.log( entries );
// }

// метод forEach(value, key, map)

// recipeMap.forEach( (value,key) => {
//   console.log(`${key}: ${value + (value / 100 * 10)}`);
// });


// метод Object.entries(obj) создает Map из объектов

// let obj = {
//   name: "John",
//   age: 30
// };

// let map = new Map(Object.entries(obj));

// for( let entries of map ) {
//   console.log(entries);
// }


// метод Object.fromEntries(map) создает объект из подходящего Map вида [ключ, значение]

// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['apple', 3],
// ]);

// console.log(prices);


// К примеру, у нас данные в Map, но их нужно передать в сторонний код, который ожидает обычный объект.
// Вот как это сделать:

// let map = new Map();
// map.set('banana', 1)
//   .set('orange', 2)
//   .set('meat', 4);

// // let obj = Object.fromEntries( map.entries() ); 
// // методом entries() перебираем все ключ-значения но можно и без него!!!
// let obj = Object.fromEntries( map );
// console.log( obj );
// console.log( obj.meat );


// Set - это особый виед коллекции множество значений (без ключей), 
// где каждое значение может появляться только один раз

// Основный методы

// new Set(iterable) - создаёт Set, и если в качестве аргумента был предоставлен итеррируемый объект 
// (обычно это массив) токопирует его значения в новый Set

// set.add(value) - добавляет значение (если оно уже есть, то ничего не делает), возвращает тотже объект set

// set.delete(value) - удаляет значени, возвращает true если value было в множесте на момент вызова, иначе false

// set.has(value) - возвращает true, если значение присутствует в множестве, иначе false

// set.clear() - удаляет все имеющиеся значения

// set.size - возвращает кол-во эл.-в в множестве

// let set = new Set();

// let john = {name: 'John', age: 22}
// let pete = {name: 'Pete'}
// let mary = {name: 'Mary'}

// set.add(john)
//   .add(mary)
//   .add(john)
//   .add(john)
//   .add(john)
//   .add(john)
//   .add(john)
// console.log(set.size)

// console.log(set)

// for( let user of set ) {
//   console.log( user.name );
// }


// Перебор объекта Set с помощью for..of и forEach(value, valueAgain, set) // valueAgain иногда может помочь в совместимости set и map

// let set = new Set(['apple', 'orange', 'banana']);
// for( let value of set ) console.log(value);
// set.forEach( value => console.log(value) );

// методы Set

// set.keys() - возвращает перебираемый объект для значений
// set.values() - то же самое что и set.keys() - существует для обратной совместимости с Map
// set.interies() - возвращает перебираемый объект для пар вида [значение, значение] пресутствует для обратной совместимости с Map

// =====================================================
// Итог по Map и Set

// Map - коллекция пар ключ-значение

// Методы и свойства:
// new Map([iterable]) – создаёт коллекцию, можно указать перебираемый объект (обычно массив) из пар [ключ,значение] для инициализации.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

// Отличия от обычного объекта Object:
// Что угодно может быть ключом, в том числе и объекты.
// Есть дополнительные методы, свойство size.


// Set – коллекция уникальных значений, так называемое «множество».

// Методы и свойства:
// new Set([iterable]) – создаёт Set, можно указать перебираемый объект со значениями для инициализации.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

// Перебор Map и Set всегда осуществляется в порядке добавления элементов, 
// так что нельзя сказать, что это – неупорядоченные коллекции, 
// но поменять порядок элементов или получить элемент напрямую по его номеру нельзя.

// function unique(arr) {
//   return Array.from( new Set(arr) );
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];

// console.log( unique(values) );

// let map = new Map();

// map.set('name', 'John');

// // let keys = Array.from( map.keys() );

// // keys.push('more');

// // console.log(keys);

// // console.log(map);

// let arr = Array.from(map);

// let nMap = new Map(arr);
// console.log(nMap);


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

// function aclean(arr) {
//   let map = new Map();
//   for( let word of arr ) {
//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word);
//   }
//   return Array.from( map.values() );
// }

// ============================================


// WeakMap ключами должны быть объекты

// методы WakeMap

// weakMap.get(key) // возвращает значение по ключу
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key) //возвращает true или false

// let john = {name: 'John', age: 22}

// let map = new Map();

// map.set(john, '...');

// john = null;

// // console.log(john)

// for(let key of map.entries()) {console.log(key)} // в памяти еще остался john хотя уже удален!!!




// let weakMap = new WeakMap();

// let obj = {};

// weakMap.set(obj, 'true'); //работает объект в качестве ключа

// weakMap.set('test', 'ok'); // не работает, строка в качестве ключа



// let john = {name: 'John'};

// let weakMap = new WeakMap();

// weakMap.set(john, '...');

// console.log(weakMap);

// john = null;

// console.log(weakMap); // john уже удалится зависит от движка

// console.log(weakMap.get(john))



// В WeakMap присутствуют только следующие методы:

// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)



// let john = {name: 'John'}

// let visitCountMap = new Map();

// функция подсчета посетителей

// function countMap(user) {
//   let count = visitCountMap.get(user) || 0;
//   visitCountMap.set(user, count + 1)
// }

// сам подсчет, но останется все в памяти если удалить john его значение так и будут занимать область памяти.

// countMap(john);
// countMap('marry');
// countMap("john");

// console.log( visitCountMap );


// ++++++++++++++++++
// Object.keys, values, entries
// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].
// Object.entries с последующим вызовом Object.fromEntries:

// let obj = {name: 'Oj', age: 22, ballance: 2100, sex: 'men'}

// for( let iter of Object.entries(obj) ) {
//   console.log(iter);
// }

// let arr = Array.from( Object.entries(obj) );

// console.log( arr );

// let nObj = Object.fromEntries( arr );

// console.log( nObj );


// let john = {name: 'John', age: 22}

// let arr = Array.from( Object.entries(john) );

// console.log( arr );

// let setKeyJohn = new Set( Object.keys(john) );

// console.log(setKeyJohn)


// function sumSalaries(salaries) {
//   let sum = 0;
//   for(let num of Object.values(salaries) ) {
//     sum += +num;
//   }
//   return sum;
// }

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// console.log(sumSalaries(salaries))


// function count(obj) {
//   return Object.keys(obj).length
// }

// let user = {
//   name: 'John',
//   age: 30
// };

// console.log( count(user) )


// Деструктурирующее присваивание+++++++++++++++

// let arr = ['Ilya','Kantor']

// // деструктирующее присваивание
// // записывает firstName = arr[0], surName = arr[1]

// let [firstName, surName] = arr;

// console.log(firstName);
// console.log(surName);


// // преобразование строку в массив через метод split

// let [firstName, surName] = 'Ilya Kantor'.split(' ');

// console.log(firstName);
// console.log(surName);

// отбросить элементы можно через запятую

// let arr = ['Julius', 'Santa', 'Bremor', 'of the Romain Republic']

// let [firstName, , , title] = arr;

// let fullName = `${firstName} ${title}`;
// let arrFullName = fullName.split(' ');

// console.log(firstName);
// console.log(title);
// console.log(typeof fullName);
// console.log(arrFullName);

// let [name, , , , republic] = arrFullName;

// console.log(name + ' ' + republic.toLowerCase() );


//++++++++++++ работает с любым перебираемым объектом правой стороны

// let [a, b, c] = 'abc';
// let [one, two, three] = new Set([1, 2, 3]);

// console.log( a + one );



//++++++++++++ присваивает чему угодно с левой стороны

// let user = {};

// [user.name, user.surname] = 'Ilya Maslov'.split(' ');

// console.log(user.name);

// console.log(user);



// ++++++++++ Цикл с entries()


// let user = {
//   name: 'John',
//   age: 30
// };

// // цикл по ключам и значениям
// for( let[key, value] of Object.entries(user) ) {
//   console.log(`${key}: ${value}`);
// }


// то же самое для Map

// let map = new Map();

// map.set('name', 'John');
// map.set('age',22);

// for(let [key, value] of map) {
//   console.log(`${key}: ${value}`);
// }


// остаточные параметры ...

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(name1);
// console.log(name2);

// // оператор (...) - должен стоять последним, - получили остаточный массив rest ["Consul", "of the Roman Republic"] 

// console.log(rest[0]) // обратимся к массиву = Consul


// значение по умолчанию 

// let [name = 'Guest', surName = 'Bin'] = ['Anonimus'];

// console.log(name); // Anonimus - взято из массива
// console.log(surName); // Bin - взято по умолчанию, т.к. нечего брать из массива


// let [name = prompt('Name',''), surName = prompt('Surname','')] = ['Julius'];// prompt запустится только для surName т.к. name будет взят по умолчанию.

// console.log( surName[0].toLowerCase() + surName.slice(1).toUpperCase() );



// let option = {title: 'menu', trigger: 10};

// let {width: w = 100, title, height: h = 40, trigger} = option;

// console.log( w );
// console.log( title );
// console.log( h );
// console.log( trigger );




// ++++++++++ деструктуризация с объектами

// let user = {};

// [user.name, user.age] = ['John', 22]; // присваивает значение объекту

// console.log(user.name);


// let {name = 'John', age = 22} = {}; // присваивает значение только переменной

// console.log(name);

// console.log(user);



// +++++ Вызов только title

// let option = {
//     title: 'Menu',
//     width: 120,
//     heigh: 200,
// }

// let {title} = option;

// console.log(title);
// +++++++++++++++++++++++++

// let {height: h = 100, width, title} = {title: 'Menu', width: 33}

// console.log( title );
// console.log( h );



// +++++++++++++++Вложенная деструктуризация

// let options = {
//     size: {
//         width: 100,
//         height: 200,
//     },

//     items: ['Cake', 'Donut'],

//     extra: true,
// };

// let {
//     size: {
//         width: w,
//         height: h,
//         radius: r = 50
//     },

//     items: [items1, items2],

//     title = 'Menu'
// } = options;

// console.log( w );
// +++++++++++++++++++



// Умные параметры функций  - Мы можем передать параметры как объект, и функция немедленно деструктурирует его в переменные:


// let options = {
//     title: 'My menu',
//     items: ['Item1', 'Item2'],
// }

// function showMenu( {title = 'Untitled', width = 200, height = 100, items = []} ) {
//     // title, items - взято из options
//     // width, height - используют значения по умолчанию
//     // console.log( `${title} ${width} ${items}`)
//     console.log( `${title} ${width} ${items}`);
// };

// showMenu( options );


// let options = {
//     title: 'My menu',
//     items: [500, 300],
// };

// function showMenu( {
//     title = 'Untitled',
//     width: w = 100,
//     height: h = 50,
//     items: [item1, item2],
// }) {
//     console.log(`${title} ${w} ${h} ${item1 - item2}`)
// };

// showMenu(options);


// +++++++++++++++++++++++++++++++++++++

// let user = {
//     name: "John",
//     years: 30,
// };

// let {name, years: age, isAdmin = false} = user;

// console.log(name + ' '+ age + ' ' + isAdmin);

// let salaries = {
//     // 'John': 100,
//     // 'Pete': 300,
//     // 'Mary': 250,
// }

// function topSalary( salaries ) {
//     let maxMoney = 0;
//     let name = null;

//     for( let [key, value] of Object.entries(salaries) ){
//         if(value > maxMoney) {
//             maxMoney = value;
//             name = key;
//         }
//     }
//     return name;
// }

// console.log( topSalary( salaries ) );







// function myFib(num) {
//     let arr = [ 1, 1];
//     while( num > ( arr[arr.length - 2] + arr[arr.length - 1] ) ) {
//         arr.push( arr[arr.length - 2] + arr[arr.length - 1] )
//     };
//     if( typeof num == 'string' || isNaN(num)) {
//         return NaN
//     } else if (num == 0) {
//         return 0;
//     } else if (num == 1) {
//         return arr[1]
//     }
//     return arr;
// }

// console.log( fib(445) );

// let users = {};

// [users.john, users.nickole, users.abram] = [{
//     name: 'John', 
//     age: 22,
//     ballance: 30,
// },
// {
//     name: 'Nickole',
//     age: 44,
//     ballance: 50,
// },
// {
//     name: 'Abram',
//     age: 88,
//     ballance: 8000,
// } ];


// let john = users.john;

// [john.sex, john.fobia] = ['men', 'spider']; 

// let {sex: s, fobia: f} = john;

// console.log( s );



// +++++++++++++++ Дата и время!!

// синтаксис let date = new Date();
// new Date(year, month, date, hours, minutes, seconds, ms) - Создать объект Date с заданными компонентами в местном часовом поясе. Обязательны только первые два аргумента.
// year должен состоять из четырёх цифр: значение 2013 корректно, 98 – нет.
// month начинается с 0 (январь) по 11 (декабрь).
// Параметр date здесь представляет собой день месяца. Если параметр не задан, то принимается значение 1.
// Если параметры hours/minutes/seconds/ms отсутствуют, их значением становится 0.


// let date = new Date();
// console.log( date );

// let Jan01_1970 = new Date(0);
// console.log( Jan01_1970 );

// let Jan02_1970 = new Date( 24 * 3600 *1000); // прибавили 24ч в милиссекундах к началу отсчета (таймстампа)
// console.log( Jan02_1970 );

// let date = new Date( '2017-10-26' ); // строку также воспримет
// console.log( date );

// let date = new Date( 2010, 4, 25, 12, 30);
// console.log( date );


// +++++методы получения даты

// getFullYear() - получить год (4 цифры)

// getMonth() - получить месяц (от 0 до 11)

// getDate() - получить день месяца (от 1 до 31)

// getHours(), getMinutes(), getSeconds(), getMilliSeconds()

// getDay() - получить день недели( от 0 до 6 )!

// getTime() - возвращает кол-во миллисекунд с тайм стампа

// getTimezoneOffset() - возвращает разницу в минутах между местным и часовым поясом UTC

// ++++++++++ UTC

// let date = new Date();
// console.log( date.getHours() );
// console.log( date.getUTCHours() ); // c UTC = 0; ++++++++

// console.log( date.getTime() );

// getTimezoneOffset() - возвращает разницу в минутах между местным и часовым поясом UTC

// console.log( new Date().getTimezoneOffset() );
// если вы в часовом поясе UTC-1, то выводится 60
// если вы в часовом поясе UTC+3, выводится -180


// Методы установки компонентов даты и времени:

// setFullYears( year, [month], [date] );
// setMonth( month, [date] );
// setDate( date );
// setHours( hour, [min], [sec], [ms]);
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliSeconds(ms);
// setTime(milliseconds) устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)


// у всех этих мотодов кроме setTime() есть UTC - вариант, например setUTCHours()

// let today = new Date();
// // today.setHours(0); // установили текущую дату с часом = 0;
// // today.setHours(0, 0, 0) // установили текущую дату с часом сек и миллисек = 0 
// today.setHours(0, 0) //Если какая-то компонента не указана, она не меняется.

// console.log(today);



// ++++++++++++ Автоисправление даты
// если поставить дату вне диапозона она автоматически исправится

// let date = new Date(2013, 1, 32);
// console.log(date);


// чтобы увеличить дату на 2 или сколько угодно дней нужно просто прибавить увеличим дату на 2 дня
// let date = new Date(2010, 3, 22); 
// date.setDate( date.getDate() + 2 );
// console.log( date );

// увелим дату спустя 70 секунд с текущего момента
// let date = new Date();
// date.setSeconds( date.getSeconds() + 70 );
// console.log( date );

// отрицательные значения
// let date = new Date();
// date.setDate(1); // задать первое число месяца
// console.log(date);

// date.setDate(0); // число мес. начинается с 1, 0 это последнее число предыдущего
// console.log( date );



// +++++++++++ Date.now()

// let start = Date.now();// этот способ работает быстрее и не нагружает сборщик мусора

// // что то делаем
// for( let i = 0; i < 100000; i++) {
//     let doSomething = i * i * i;
// }

// let end = Date.now();
// console.log(`цикл проработал ${end - start} миллисекунд`); // вычесляются числа, а не даты!!!



// Бенчмаркинг +++++++++++

// измерение через функцию

// function diffSubtract(date1, date2) {
//     return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();
    
//     let start = Date.now();
//     for(let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;

// }

// console.log( 'Время diffSubtract: ' + bench(diffSubtract) + 'мс' );
// console.log( 'Время diffGetTime: ' + bench(diffGetTime) + 'мс' );


// ++++++ Метод Date.parse(str) считывает дату из строки

// формат строки должен быть YYYY-MM-DDTHH:mm:ss.sssZ, где:
// YYYY-MM-DD - это дата год, месяц, день
// символ T используестя в качестве разделителя
// HH:mm:ss.sss - время, часы, минуты, секунды и миллисекунды
// Необязательная часть 'Z' обозначает частовой пояс в формате +- hh:mm Если указать просто букву Z, то получим UTC+0;

// Вызов Date.parse(str) обрабатывает строку в заданном формате и возвращает таймстамп (количество миллисекунд с 1 января 1970 года UTC+0). Если формат неправильный, возвращается NaN.

// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
// console.log( date );


// +++++++++++++++++++++++++

// let date = new Date ( 2012, 1, 20, 3, 12);
// alert ( date );


// let date = new Date( 2012, 0, 3 );

// function getWeekDay(date) {
//     let dayWeek = date.getDay();

//     switch(true) {
//         case (dayWeek === 1):
//         return 'ПН';
//         break;

//         case (dayWeek === 2):
//         return 'ВТ';
//         break;

//         case (dayWeek === 3):
//         return 'СР';
//         break;

//         case (dayWeek === 4):
//         return 'ЧТ';
//         break;

//         case (dayWeek === 5):
//         return 'ПТ';
//         break;

//         case (dayWeek === 6):
//         return 'СБ';
//         break;

//         case (dayWeek === 7):
//         return 'ВС';
//         break;
//     }
// }

// alert( getWeekDay(date) );

// ++++++++++++++++
// function getWeekDay(date) {
//     let days = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
//     return days[date.getDay() -1];
// }
// alert( getWeekDay(date) );
//+++++++++++++++++ 

// ++++++++++++++++
// let date = new Date(2015, 0, 2);

// // function getDateAgo(date, days) {
// //     return new Date( date - days * (1000 * 3600 * 24) ).getDate();
// // }

// function getDateAgo(date, days ) {
//     let dateCopy = new Date(date);
//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
// }

// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// +++++++++++++++++++


// function getLastDayOfMonth(year, month) {
//     // let date = new Date(year, month);
//     // date.setMonth(date.getMonth() + 1 );
//     // date.setDate(date.getDate() - 1 );
//     // return date.getDate();
    
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }

// console.log( getLastDayOfMonth(2012, 1) );

// ++++++++++++++++++++++++++++++++++++++++
// function getSecondToday() {
//     let date = new Date();
//     date.setHours(9, 0, 0, 0);
//     date = Math.floor((Date.now() - date) / 1000);
//     console.log( date ); 
// }

// getSecondToday();
// +++++++++++++++++++++++++++++++++++++++++

// function getSecondsToTommorow() {
//     let date = new Date();
//     date.setDate( date.getDate() + 1 );
//     date.setHours(0, 0, 0, 0);
//     let secondToTommorow = Math.floor((date - Date.now())/1000);
//     return secondToTommorow;
// }

// console.log( getSecondsToTommorow() );

// ++++++++++++++++++++++++++++++++++++++++++



// Формат JSON, метод toJSON +++++++++++++++

// let user = {
//     name: 'John',
//     age: 22,
//     money: 2555,
//     toString() {
//         return `{name: ${this.name}, age: ${this.age}}`
//     },
//     valueOf() {
//         return this.money;
//     }
// }

// console.log(user);
// alert(user);
// alert(+user);

// JSON.stringify - для преобразования объектов в JSON
// JSON.parse - для преобразования JSON обратно в объект

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null,
// }

// let json = JSON.stringify(student);

// // console.log( typeof json ); // получим строку

// alert( json ); // Полученная строка json называется JSON-форматированным или сериализованным объектом.


// JSON пропускает специфические свойства объектов
// - свойства функции (методы)
// - символьные свойства
// - свойства содержащие undefined

// let user = {
//     sayHi() {
//         alert('Привет');
//     }, // будет пропущено

//     [Symbol('id')]: 123, // будет пропущено

//     something: undefined, // также будет пропущено

//     isAdmin: false // это будет
// }

// alert( JSON.stringify(user) );

// let meetup = {
//     title: "Conference",
//     room: {
//         number: 23,
//         participants: ["John", "Ann"]
//     }
// };

// console.log( JSON.stringify(meetup) );



// ++++++++++ replacer

// Полный синтаксис JSON.stringify
// let json = JSON.stringify(value[, replacer, space]);

// value - значение для кодирования

// replacer - массив свойств для кодирования или функция соответсвия function(key, value);

// space - дополнительное пространство (отступы), используемое для форматирования.

// let room = {
//     number: 23,
// }

// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"},{name: "Alice"}],
//     place: room, //meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// alert( JSON.stringify(meetup,['title', 'participants']) );

// let room = {
//     number: 23,
// };

// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room, // meetup ссылается на rooom
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// console.log( JSON.stringify( meetup, ['title', 'participants', 'place', 'name', 'number'] ));


// +++++ replacer

// let room = {
//     number: 23,
// };

// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room, // meetup ссылается на rooom
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// console.log( JSON.stringify( meetup, function replacer( key, value) {
//     // console.log(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
// } ));


// ++++ форматирование space применяется для логирования и красивого вывода

// let user = {
//     name: "John",
//     age: 25,
//     roles: {
//         isAdmin: false,
//         isEditor: true,
//     }
// };

// alert( JSON.stringify(user, null, 2) );

// ++++++ пользовательский toJSON

// let room = {
//     number: 23,
// }

// let meetup = {
//     title: 'Conference',
//     date: new Date(Date.UTC(2017,0,1)),
//     room,
// };

// alert( JSON.stringify(meetup) );




// +++++ встроенный метод toJSON()

// let room = {
//     number: 23,
//     toJSON() {
//         return this.number;
//     },
// };

// let meetup = {
//     title: "Conference",
//     room,
// };

// alert( JSON.stringify(room) );
// alert( JSON.stringify(meetup) );



// ++++++++++ JSON.parse - декодировать строку в объект

// let value = JSON.parse(str, [reviver]);

// str - JSON преобразует в объект
// reviver - необязательная функция которая будет вызываться для каждой пары (ключ, значение) и может преобразовывать значение.


// Пример.

// let numbers = "[0, 1, 2, 3, 4, 5]"; // Это мы получим с JSON.stringigy();

// numbers = JSON.parse(numbers);

// console.log( numbers[1] ); //1


// Для вложенных объектов

// let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// user = JSON.parse(user);
// console.log( user.friends[1] ); //1
// console.log( user.name );
// console.log( user.age );


// Особенность с Date и пр. объектами

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// console.log ( meetup.date.getDate() ); //30


// еще пример с Date

// let schedule = `{
//     "meetups": [
//       {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//       {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//     ]
// }`;
  
// schedule = JSON.parse(schedule, function(key, value) {
//     if (key == 'date') return new Date(value);
//     return value;
// });
  
// console.log( schedule.meetups[1].date.getDate() );


// let user = {
//     name: 'John',
//     toJSON() {
//         return 'Go to Fuck';
//     },
//     toString() {
//         return this.toJSON();
//     }
// }
// alert (user);
// user = JSON.stringify(user);
// console.log(user);



// ++++++++++++++++++++ задачки


// let user = {
//     name: "Василий Иванович",
// }

// user = JSON.stringify(user);

// console.log(user);

// user = JSON.parse(user);

// console.log(user);

// ++++++++++++++++++++++++


// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room,
// };

// room.occupiedBy = meetup;
// meetup.self = meetup;


// alert( JSON.stringify(meetup, function replacer(key, value){
//     return (key != "" && value == meetup) ? undefined : value;
// }));
// ++++++++++++++++++++++++++++++++++++++++


// ПРОДВИНУТАЯ РАБОТА С ФУНКЦИЯМИ
// ++++++++++++++++++++++++++++++



// Рекурсия и стек

// 2 мышления (рекурсивное и итеративное (через цикл))

// console.log( pow(2,2) );
// console.log( pow(4,2) );

// через цикл

// function pow(a, b) {
//     let result = 1;
//     for(let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// через рекурсию

// function pow(x, n){
//     if( n == 1) {
//         return n;
//     }else{
//         return x * pow(x , n - 1);
//     }
// }

// console.log( pow(3, 4) );

// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//       sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//       internals: [{name: 'Jack', salary: 1300}]
//     }
// };

// function sumSalaries(department) {
//     if( Array.isArray(department) ) {
//         return department.reduce((prev, current) => prev + current.salary, 0);
//     } else {
//         let sum = 0;
//         for( let subdep of Object.values(department) ) {
//             sum += sumSalaries(subdep);
//         }
//         return sum;
//     }
// }

// console.log( sumSalaries(company) );


// Связанный список




// Рекурсия - это термин в программировании, означающий вызов функцией самой себя. Рекурсивные функции могут быть использованы для элегантного решения определенных задач.

// Когда функция вызывает саму себя, это называется шагом рекурсии. База рекурсии - это такие аргументы функции, которые делают задачу настолько простой, что решение не требует дальнейших вложенныъ вызовов.


// ++++++++++++++++++++ задачи

// с использованием цикла

// function sumTo(num) {
//     let sum = 0;
//     for( let i = 0; i <= num; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log( sumTo(1) );


// с использованием рекурсии

// function sumTo(num) {
//     if(num == 1) {
//         return num;
//     }else{
//         return num + sumTo(num - 1);
//     }
// }

// console.log( sumTo(5) );


// факториал

// function factorial(n) {
//     return (n == 1) ? 1 : n * factorial(n - 1);
// };

// console.log( factorial(5) );


// число фибоначи через рекурсию

// function fib(n) {
//     if( n == 1 || n == 2) {
//         return 1;
//     } else {
//         return fib(n - 1) + fib(n - 2);
//     }
// }

// console.log( fib(3) );

// число фибоначи через перебор (итерации цикла)

// function fib(n) {
//     let arr = [1, 1];
//     while( arr.length < n ) {
//         arr.push( arr[arr.length - 1] + arr[arr.length - 2] );
//     }
//     // return arr[arr.length - 1];
//     return arr;
// }

// console.log( fib(7) );

// function rec(n) {
//     n = n + 2;
//     console.log(n);
//     if(n == 10 || n > 10) {
//         return n;
//     }else{
//         return rec(n);
//     }
// };

// rec(0);

// let fac = (n) => {
//     if(n == 1) {
//         return n;
//     }else{
//         return n * fac(n -1);
//     }
// }

// console.log( fac(5) );

// рекурсия суммы чесел

// function getSum(arr, sum) {
//     sum += arr.shift();

//     if(arr.length != 0) {
//         sum = getSum(arr, sum);
//     }

//     return sum;
// }

// console.log( getSum([1, 2, 3], 0));


// Односвязный список JS


// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null,
//             }
//         }
//     }
// };

// function printListReverse(list) {
//     let arr = [];

//     while(list) {
//         arr.push(list.value);
//         list = list.next;
//     }

//     for(let num of arr.reverse()) {
//         console.log(num);
//     }

// }

// printListReverse(list);

// function printList(list) {

//     while(list) {
//         console.log(list.value);
//         list = list.next;
//     }

// }

// function printList(list) {
//     console.log(list.value);

//     if(list.next) {
//         console.log( printList(list.next) );
//     }
// }

// printList(list);

// function pow(x, n) {
//     let result = 1;

//     for(let i = 0; i < n; i++) {
//         result = result * x; 
//     }

//     return result;
// }

// console.log( pow(2, 3) );


// let company = {
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
//     development: {
//         sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
//         internals: [{name: 'Jack', salary: 1300}],
//     }
// };

// function sumSalary(departament) {
//     if(Array.isArray(departament)) {
//         departament.reduce((sum, item) => sum + item.salary, 0);
//     } else {
//         let sum = 0;
//         for(let subdep of Object.values(departament)) {
//             sum = sum + sumSalary(subdep);
//         }
//         return sum;
//     }
// };

// console.log(sumSalary(company));