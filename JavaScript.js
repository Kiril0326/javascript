const a = 2;
const b = 3;
const c = 10; 
const e = 20;
 

//  if (c === 10 && e === 10) {
//     console.log("Sunt egale");
//  } else {
//     console.log("nus egale");
//  }

// if (c > 19 ) {
//     console.log("Una este corecta");
// } else if(e > 10) {
//     console.log("nici una nui correct");
// }
// else if(e > 10){
//     console.log("nici una nui correct");
// }

// let fruit = "orange"

// switch (fruit) {
//     case "orange":
//         console.log("Orange $0.59");
//         break;
//     case "apple":
//         console.log("Apple $1.59");
//         break;
//     case "banana":
//         console.log("Banana $2.59");
//         break;
//     default:
//         break;
// }

// let i = 1;

// while (i <= 5) {
//     console.log(i)
//     i += 1;
// }


// for (let index = 0; index < 5 ; index++) {
//     console.log(index);
    
// }

const first_number = prompt("First number");
const operator = prompt("mathematical operator")
const second_number = prompt("Second number");

Number()

if (operator === "+") {
    console.log(Number(first_number) + Number(second_number));
} else if (operator === "-") {
    console.log(Number(first_number) - Number(second_number));
} else if (operator === "*") {
    console.log(Number(first_number) * Number(second_number));
} else if (operator === "/") {
    console.log(Number(first_number) / Number(second_number));
} else if (operator === "**") {
    console.log(Number(first_number) ** Number(second_number));
}