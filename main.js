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

//     // valueOf() {
//     //     return this.money;
//     // },

//     // toString() {
//     //     return this.name;
//     // },
    

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

function Accumulator(startingValue) {
    this.value = +startingValue;
    this.read = function () {
        this.value += +prompt ('Введите Ваше число','');
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений