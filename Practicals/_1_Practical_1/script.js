// //Task 1
// console.log(`-> Variables:`)
// //Var
// var v = "Hi i am Var"
// console.log(v)

// //let
// let l = 45
// console.log(l)


// //const
// const z = true;
// console.log(z)
// console.log(" ")



// //Primitive Data Types
// console.log(`-> Primitive Data Types:`)
// let a = [null,4578,"Hi I am String",Symbol("I am Symbol"),Boolean(true),BigInt(1548454981),undefined]
// console.log(a)
// console.log(" ")


// //Non Primitive Data Types -> Object
// console.log(`-> NON Primitive Data Types:`)
// const obj = {
//   charusat: "Changa",
//   Msu: "Vadodara",
//   DDU:"Nadiad"
// }
// console.log(obj)



// //Task 2
// const arithOp = (a, b) => {
//   let sum = a + b;
//   let difference = a - b;
//   let product = a * b;
//   let quotient = a / b;

//   return {
//     Sum: sum,
//     Difference: difference,
//     Product: product,
//     Quotient: quotient
//   }
// }

// console.log(arithOp(5,2))




// Task 3
// let age = Number.parseInt(prompt("Please Enter the age?"))

// if (age < 18) {
//   console.log("You are minor")
// }
// else if (age >= 18 && age <= 65) {
//   console.log("You are an adult")
// }
// else if (age >= 65) {
//   console.log(`You are a Senior Citzen`)
// }


// //Task 4
// const findMinAndMaxSal = (array) => {
//   let minSalary;
//   let maxSalary;

//   if (array.length == 0) {
//     return { minSalary: null, maxSalary: null }
//   }

//   minSalary = array[0];
//   maxSalary = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < minSalary) {
//       minSalary = array[i];
//     }
//     if (array[i] > maxSalary) {
//       maxSalary = array[i];
//     }
//   }

//   return { minSalary, maxSalary }
// }

// let arr = [50000, 60000, 45000, 75000, 80000]
// let result = findMinAndMaxSal(arr)

// console.log(`Minimun Salary : ${result.minSalary}`)
// console.log(`Maximum Salary : ${result.maxSalary}`)



// //Task 5
// const displayBookNames = (arr) =>{
//   if(arr.length==0){
//     console.log(`Please provide name of books`)
//   }

//   for(let i=0; i<arr.length; i++){
//     console.log(`Book number ${i+1} : ${arr[i]}`)
//   }
// }
// let book = ["To kill a Mokoingbbird by Harper Lee","1984 by George Orwell","The Great Gatsby by F.scott Fitzgerald","Pride and Prejudice by Jane Austen"]
// displayBookNames(book)


//Task 6 ----------------------
// //var
// function myFunction() {
//   var x = 10;
//   console.log(x);  
// }

// myFunction();
// console.log(x);   


//let
// function myFunction() {
//   let x = 10;
//   console.log(x);  
// }

// myFunction();
// console.log(x);    


//const
// function myFunction() {
//   const x = 10;
//   console.log(x);  
// }

// myFunction();
// console.log(x);    



// Task 7
let btn = document.getElementsByTagName("button")[0]

btn.addEventListener("click",()=>{
  btn.innerHTML = `I am clicked by Nazil`
})



// Task 8 -------------------
// function checkNumber(number) {
//   if (number < 0) {
//     throw new Error("Number cannot be negative");
//   }
  
//   return number;
// }

// try {
//   let result = checkNumber(-5);
//   console.log(result);
// } catch (error) {
//   console.log("Error:", error.message);
// }



// task 9
function simulateAsyncOperation(callback) {
  setTimeout(function() {
    const result = "Async operation completed";
    callback(null, result);
  }, 2000);
}

console.log("Start of the program");

simulateAsyncOperation(function(error, result) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Result:", result);
  }
});

console.log("End of the program");


