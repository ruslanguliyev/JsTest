// let result = ""
// let rev = ""
// for (let i = 1; i <= 7; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*"
//     }
//     result += "\n"
// }


// for (let p = 1; p <= 7; p++) {

//     for (let u = 7; u >= p; u--) {
//         rev += "*"
//     }
//     rev += "\n"
// }

// console.log(result);
// console.log(rev);


//==================================================//
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)
// ======================================================//



//======================================================//


// let quest = window.prompt("Какое «официальное» название JavaScript?")
// let result = null;


// if (quest == "ECMAScript") {
//     window.alert("Верно!")
// } else if (quest == "") {
//     window.alert("Ne mojet bit pustim")
// } else {
//     window.alert("Не знаете? ECMAScript!")
// }

// let reqem = window.prompt("Reqem Yazin")

// if (reqem == 45) {
//     window.alert("Tebrikler galib oldunuz")
// } else if (reqem < 0) {
//     window.alert("-1")
// } else if (reqem == 0) {
//     window.alert("0")
// } else if (reqem = " ") {
//     window.alert("Yeke Oglansan nese yaz...")
// }



//=======================================================//

// let num1 = 2;
// let num2 = 20;
// let num3 = num1-- + num2;
// let num4 = num1 + num2;

// console.log(num3);
// console.log(num4);




//=======================================================//


// let i = 0;
// while (i < 10) { // выводит 0, затем 1, затем 2
//     setTimeout(() => console.log(i), 1000)
//   i++;
// }


// for (let i = 0; i < 5; ++i) {
//     setTimeout(() => console.log(i), 1000)
// }


// let foo = () =>{
//     console.log(age);
//     var age = 26;
// }
// foo()



// for(let i=0; i<=5; ++i){
//     console.log(i);
// }

// let i = 0;

// while (i <= 5) {
//     console.log(i);
//     i++
// }


// let p = 0;
// do{
//     ++p;
//     console.log(p);
// }while(p<=5)


//========================================================//



// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(1 && 2 && 4 && 3);
// console.log(!1 && 2 || !3);
// console.log(25 || null && !3);
// console.log(NaN || null || 5 || undefined || !3);
// console.log(NaN || null && !3 && undefined || 5);
// console.log(5 === 5 && 3 > 1 || 5);

//=========================Array Task=======================================//


// const arr = [5, 10, 'Shopping', 20, 'Homework']
// const result =[]
// for (let i = 0; i < arr.length; i++) {
//     if (typeof(arr[i]) === 'number') {
//         arr[i] = arr[i] * 2;
//     } else if (typeof(arr[i]) === 'string'){
//         arr[i] =`${arr[i]} - done`
//     }
//    arr.reverse()
//    result.push(arr)
// }
// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

// console.log(result);


// export const reverse = (array) => {
//     const reversed = [];

//     for (let i = array.length - 1; i >= 0; i -= 1) {
//       reversed.push(array[i]);
//     }

//     return reversed;
//   };

//=====================================================


// for (let p = 0; p <= 10; p++) {
//     if (p % 2 == 0) {
//         console.log(p);
//     }
// }

// const arr = []


// for (let p = 5; p <= 10; p++) {
//     arr.push(p)

// }
// console.log(arr);

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i] * 2;
//     }

//     console.log(result);


//===================================================//

// return masked string
// function maskify(cc) {
   

// }

