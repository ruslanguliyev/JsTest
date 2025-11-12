
"use strict";

// let val = !(true && true)
// console.log(val);

// val = 5 > 4 > 3 < 2;
// console.log(val);


// val  = !(0 && 0)

// console.log(val);

//======================================//

// const val1 = false,
//       val2 = true;

//       console.log(val2 || val1);

//======================================//

// const val = {
//     a: 50
// }

// val.a = 60;

// console.log(val);

//=====================================//


// console.log( 4+ "5" );

// bir operanda aid olan operatora Unary operator deyilir
// iki operanda aid olan operatora Binary operator deyilir


//Унарным называется оператор, который применяется к одному операнду.
//Бинарным называется оператор, который применяется к двум операндам.






//=====================================//


// let val  = ( 5 % 2 )&&( 8 % 3 );
// let val1 = 2 && 5
// console.log(val1);


//===============Отличие Var от Let======================//


//======Избыточные обьявления var

// function test() {

//     var age = 25;
//     var age = 26;
//     var age = 27;
//     console.log(age);
// }
// test();

// var age = 28;
// var age = 94;

// console.log(age);

// =========Область Видимости
// if (true) {
//     var name = 25
//     console.log(name);
// }
// console.log(name);

// function test() {
//     var msg = "Hallo!"
//     console.log(msg);
// }
// test();
// console.log(msg);

// if (true) {
//     let num = 27;
//     console.log(num);
// }
// console.log(num);

//========Поднятие

// function up() {
//     console.log(num);
//     var num = 5

// }
// up();


// function middle() {
//     console.log(val);
//     let val = "Ruslan"
// }
// middle();

//=========Window

// var name = 'Matt';
// console.log(window.name);

// let val = "Red";
// console.log(window.val);

//========= Цикл for


// for (var i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 0);

// }


//========================================//


// for(var i = 0; i < 10; i++) setTimeout(() => console.log(i), 0)

// for(let i = 0; i < 10; i++) setTimeout(() => console.log(i), 1000)


//====================================================================================//
// let message = 'Hello World!'
// let num = 938742;
// let boo = 5<4
// let obj = []
// let bosh = null
// let message;


// console.log(typeof (message));
// console.log(typeof num);
// console.log(boo);
// console.log(typeof null);
// console.log(typeof message);
// console.log(typeof obj);
// console.log(typeof bosh);




// let message = null
// if (message == undefined) {
//         // setTimeout(()=> alert("Zehmet olmasa boshlugu doldurun"), 1000);
//         alert(typeof message);
// }
// else{
//     console.log(message);
// }

//===========================================================================//


// let val = false == false ;

// console.log(val);

// let obj = [1] == [1] ;

// console.log(obj);

//Потому что они представляют собой массив, который также является типом объекта.
//Таким образом, каждый из них содержит разные адреса памяти. Из-за чего они не одинаковы.

//Это два разных экземпляра массива. Javascript сравнивает непримитивные значения, такие как массивы, объекты, функции и т. д., по ссылке,
//поэтому, если они буквально не являются одним и тем же экземпляром в памяти, они не будут сопоставимы.



// let num = 0 == 0;
// console.log(num);

// let a = { };
// let b = a;
// console.log( a == b )


// const dog = {
//     name: 'Naya',
//     sex: 'female',
//     age: 2,
//     breed: 'Rottweiler mix'
// };

// const cat = {
//     name: 'Naya',
//     sex: 'female',
//     age: 2,
//     breed: 'Rottweiler mix'
// }

// console.log(cat == dog);

// var num = NaN;

// console.log(typeof num);




//====================================================//
// console.log('main1');




// const soldier = {
//     health: 400,
//     armor: 100,
//     power: "fly"
// }

// const ruslan = Object.create(soldier);

// console.log(ruslan);

// function sayHello(name){
//     return `Privet, ${name}`;
// }
// sayHello('Ruslan')
// console.log(sayHello())


// ======================================================= show must go on ========================================//

// const numbers = [2, 4, 6];

// let pluss = numbers.map(num => num + 3)

// console.log(numbers);


// const numbers = [12, 5, 8, 130, 44]

// let filtred = numbers.filter(num => num < 10)

// console.log(filtred);


// const numbers = [5, 10, 15, 20]

// let filtMap = numbers.filter(num=> num > 10)

// let Mapfil = filtMap.map(num => num * 2)

// console.log(Mapfil);


// const users = [
//   { name: "Руслан", age: 26 },
//   { name: "Али", age: 19 },
//   { name: "Эмиль", age: 30 }
// ];

// let filtage = users.filter(user => user.age > 20)

// console.log(filtage);


// const users = [
//   { name: "Руслан", age: 26, active: true },
//   { name: "Али", age: 19, active: false },
//   { name: "Эмиль", age: 30, active: true },
//   { name: "Фарид", age: 17, active: true }
// ];


// let activeFiltred = users.filter(activeUser => activeUser.age > 20 && activeUser.active == true).map(newUsers => newUsers.name)

// console.log(activeFiltred);


// function calculateInterest(balance, rate){
//     return (balance * rate) / 100;
// }

// function addInterest(balance, rate){
//     return balance + calculateInterest(balance, rate);
// }

// function displayBalance(name, balance) {
//     console.log(`На счету ${name}: ${balance}$`);
// }

// let balance = 950000000
// let rate = 5

// balance = addInterest(balance, rate)
// displayBalance("Ruslan", balance)



// function isUserValid(username, password) {
//     return username === "admin" && password == "1234";
// }


// function login(username, password) {
//   if (isUserValid(username, password)) {
//     return `Добро пожаловать, ${username}!`;
//   } else {
//     return "Ошибка: неверное имя или пароль";
//   }
// }

// function displayMessage(message) {
//     console.log(message);
// }

// const message = login("admin", "1234")
// displayMessage(message)

//===================================================Object=========================================//

// let person = {};
// Object.defineProperty(person, "name", {
//     configurable: false,
//     writable: true,
//     value: "Nicholas"
// });
// Object.defineProperty(person, "name", {
//     writable: false,
// })


// person.name = "Ruslan"
// console.log(person.name);

// Object.defineProperty(user, "name", {
//     configurable: true,
//     writable: true,
//     value: "Ruslan"
// })
// Object.defineProperty(user, "age", {

//     configurable: false,
//     writable: true,
//     value: "26"
// })
// Object.defineProperty(user, "id", {
//     configurable: false,
//     writable: true,
//     value: "A13"
// })

// user.id = "440"
// console.log(user.id);




// const user = {};

// Object.defineProperty(user, "name", {
//     value: "Ruslan",
//     configurable: false
// });

// delete user.name; // ❌ не сработает
// console.log(user.name); // "Ruslan"

// Object.defineProperty(user, "name", {
//     writable: true
// }); // ❌ Ошибка: нельзя переопределить свойство



//========================get===set===================

// const user = {
//     adress: {
//         city: "Berlin",
//         country: "Germany"
//     },
//     get location() {
//         return this.city + " " + this.country
//     },
//     set location(value) {

//     }
// }


// const user = {
//     contacts: {
//         email: "ruslan@example.com",
//         phone: "+49 111 111 111"
//     },

//     get contactInfo() {
//         return `${this.contacts.email}, ${this.contacts.phone}`
//     },
//     set contactInfo(value) {
//         const [email, phone] = value.split(" | ");
//         this.contacts.email = email;
//         this.contacts.phone = phone;
//     },

// };

// user.contactInfo = "myau@gmail.com | +49 222 222 222";

// console.log(user.contacts.email);
// console.log(user.contacts.phone);
// console.log(user.contactInfo);



// const user = {
//     info: {
//         email: "",
//     },
//     get userEmail() {
//         return this.info.email
//     },
//     set userEmail(value) {
//         if (value.includes("@")) {
//            this.info.email = value;
//         }
//         else {
//             console.log("Неверный формат email");
//         }
//     }


// }

// user.userEmail = "ruslan.xample.com";
// console.log(user.userEmail);


//==================================================


// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = function () {
//         console.log(this.name);
//     };
// }

// let person1 = new Person("Ruslan", 55, "Web_Dev")


// console.log(person1);


// Обратите также внимание на то, что имя функции Person начинается с прописной буквы.
// Имена конструкторов всегда начинаются с прописной буквы, а имена обычных функций — со строчной.
// Конструкторы — это просто функции, которые создают объекты.


// class Hero {
//     constructor(name, power, health) {
//         this.name = name;
//         this.power = power;
//         this.health = health;
//     }
// }


// Hero.prototype.attack = function (target) {
//     target.health -= 10;
//     console.log(`${this.name} atakuet ${target.name}.
//         zdorovye ${target.name} :${target.health}  `);
// }


// let hero1 = new Hero("Thor", "lightning", 100);
// let hero2 = new Hero("SpiderMan", "Pautona naxuy", 100)

// hero1.atack(hero2)



// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }
// }

// Person.prototype.sayMyName = function(){
//     console.log(
//         `Privet mena zovut ${this.name} i mne ${this.age}`
//     );
// }


// let p1 = new Person ("Ruslan", 27)
// let p2 = new Person ("Sophi", 27)

// p1.sayMyName()

//=============================================================Unasledovanie/ Polimorfizm

// class Hero {
//     constructor(name, health) {
//         this.name = name
//         this.health = health
//     }
//     takeDamage(damage) {
//         this.health -= damage;
//         console.log(`${this.name} получает ${damage} урона. Осталось ${this.health} здоровья.`);
//     }
//     isAlive() {
//         return this.health > 0;
//     }
// }


// class Warrior extends Hero {
//     attack(target) {
//         const damage = 15;
//         console.log(`${this.name} rubit mechom`);
//         target.takeDamage(damage)
//     }
// }
// class Mage extends Hero {
//     attack(target) {
//         const damage = 20;
//         console.log(`${this.name} shviraet faerome`);
//         target.takeDamage(damage)
//     }
// }
// class Archer extends Hero {
//     attack(target) {
//         const damage = 10;
//         console.log(`${this.name} стреляет из лука 🏹`);
//         target.takeDamage(damage);
//     }
// }

// function battle(hero1, hero2) {
//     console.log(`⚔️ Бой между ${hero1.name} и ${hero2.name} начинается!\n`);

//     while (hero1.isAlive() && hero2.isAlive()) {
//         hero1.attack(hero2);
//         if (!hero2.isAlive()) break;

//         hero2.attack(hero1);
//     }

//     const winner = hero1.isAlive() ? hero1.name : hero2.name;
//     console.log(`🏆 Побеждает ${winner}!`);
// }

// const thor = new Warrior("Тор", 100);
// const merlin = new Mage("Мерлин", 80);

// battle(thor, merlin);

// class Transport {
//     constructor(sound, model) {
//         this.model = model;
//         this.sound = sound;
//     }

//     makeSound() {

//         console.log(`Какой-то транспорт молчит...${this.model}`);

//     }
// }

// class Car extends Transport {
//     makeSound() {
//         console.log(`${this.sound}!! Еду на тачке ${this.model}`);
//     }
// }

// class Motorcycle extends Transport {
//     makeSound() {
//         console.log(` ${this.sound}!! Газую на байке ${this.model}`);

//     }
// }

// class Bicycle extends Transport {
//     makeSound() {
//         console.log(`${this.sound}! Кручу педали на велике ${this.model}`);

//     }
// }




// const garage = [
//     new Car("БИП-БИП", 'Лада Калина'),
//     new Motorcycle("ВРУУУМ-ВРУУМ", 'Yamaha R1'),
//     new Bicycle("Дзынь-дзынь", 'Stels Navigator'),
//     new Transport('Таинственная штука на колёсах')
// ];



// garage.forEach(vehicle => vehicle.makeSound());





// class Notification {
//     constructor(message) {
//         this.message = message
//     }


//     display() {
//         console.log(`[Poprobuyate snova] ${this.message}`);
//     }
// }

// class SuccessNotification extends Notification {
//     display() {
//         console.log(`[Uspeshnaya Operacia] ${this.message}`);

//     }
// }

// class ErrorNotification extends Notification {
//     display() {
//         console.log(`[Oshibka idi naxuy] ${this.message}`);

//     }
// }

// class WarningNotification extends Notification {
//     display() {
//         console.log(`[Preduprejdenie, a to poydesh naxuy] ${this.message}`);

//     }
// }



// const Notifications = [
//     new SuccessNotification('Пользователь создан'),
//     new ErrorNotification('Не удалось подключиться к серверу'),
//     new WarningNotification('Пароль истекает через 3 дня'),
//     new Notification('Что-то произошло...')
// ]

// Notifications.forEach(n=>n.display())

//==============================================FUNCTIONS===================================================

// Поскольку функции являются объектами, имена функций явля-
// ются просто указателями на функциональные объекты и необязательно связаны
// с самой функцией.

//Функции стрелок не требуют скобок, если используется только один параметр.
// Если параметры вообще не нужны или их больше одного, требуются круглые скобки.































































