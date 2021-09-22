// let num = 4256364.2;
// const floor = Math.floor(num);
// console.log("floor..", floor);
// const numTostring = floor.toString();
// console.log("NumberLength..", numTostring);
// var subStr = numTostring.substr(0, 1);
// console.log("subStr", subStr);

// for (let index = 1; index < numTostring.length; index++) {
//     console.log(index);
//     // subStr += 0;
// }

// console.log(parseInt(subStr));


let test = 48484546.3;
let numToFloor = Math.floor(test);
let numToString = numToFloor.toString();
var numToSubStr = numToString.substr(0, 1);

var maxnumber = (parseInt(numToString.substr(0, 1)) + 1).toString();
console.log("numToSubStr..", maxnumber);

function range(params, number) {
    for (let i = 1; i < params.length; i++) {
        number += 0;
    }
    return parseInt(number);
}

let finalResult = range(numToString, numToSubStr);
console.log("finalResult....", finalResult);
let maxResult = range(numToString, maxnumber);
console.log("finalResult....", maxResult);

// function


// const array1 = [12, 12331, 5464, ""];

// if (array1.length == 0) {
//     console.log("Enter Data1")
// } else {
//     array1.forEach(element => {
//         if (element == "") {
//             console.log("Enter Data")
//         }
//     });
// }

var Obj = {
    industry_id: ['', 123]
}
var industryID = Obj.industry_id;
console.log(industryID)
if (!industryID.length) {
    console.log("please enter industryID");
} else {
    for (let i = 0; i < industryID.length; i++) {
        if (industryID[i] == '') {
            console.log("Cannot empty IndustryID");
            break;
        }
    }
}


let arry = [];
var Obj = {
    firstName: "Bhautik",
    lastName: "Ladva"
}

var data = Obj;
var finalArray = [];
finalArray.push(data);
console.log("finalArray...", finalArray);

arry.push(Obj)
for (let i = 0; i < 2; i++) {
    let secObj = {};
    secObj.firstName = "Raj",
        secObj.lastName = "Gohel"
    arry.push(secObj);
}

console.log("arry", arry);