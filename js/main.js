
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