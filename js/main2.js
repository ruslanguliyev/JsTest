// function removeSmallest(numbers){
//     const copy = numbers.slice(0)
//      let smallestValue = numbers.indexOf(Math.min(...numbers))
//      copy.splice(smallestValue, 1);
//      return copy
//     }    
// console.log("main2");

// val = 5 > 4 < 3 > 2;
// console.log(val);



// var name = "Ruslan"

// function fnc() {
//     console.log(`${"Salam"} ${name} ${"Bey"}`);
// }
// fnc();


let person = {};
Object.defineProperty(person, "name", {
    configurable: true,
    writable: true, 
    value: "Nicholas"
});


person.name = "Ruslan"
console.log(person.name);   
