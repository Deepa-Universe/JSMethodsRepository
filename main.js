"use strict";
//Functions

//Kinds of functions

//1. Function without Parameters and does not return any value

//Define the functions
function add1() {
    let value1 = 100; //variables are inside the scope, hence not accessible outside the fucntion
    let value2 = 200;

    console.log(value1 + value2);
}

//Calling function
add1(); //300

//Note: Had it been var, it is accessed outside the function

//2. Function without Parameters and returns any value
//Define the functions
function add2() //Same JS File cannot have variables or functions with same name.
{
    let value1 = 11;
    let value2 = 20;

    let result = value1 + value2
    return result;  //Functions returns only one item at a time.
}

//Calling Function
let resultAdd2 = add2(); //Function is returning the value
console.log(resultAdd2); //31

//We can call the method again as-
console.log(add2()); //31

console.log("*************************************************************");

//3. Function with Parameters and does not return any value
/*function add3(value1, value2) {
    let result3 = value1 + value2;   //for other operators (*, -), it gives undefined, NaN
    console.log(result3);
}

let value1 = 34;
let value2 = 67;
add3(value1, value2); //Calling Function

value1 = "Deepa"; value2 = "Prakash";
add3(value1, value2); //Gives result "Deepa Prakash"

console.log(add3("Universe is Showing", "Miracles"));*/ //It prints the desired result, then shows undefined, coz function is not returning anything

//In the above example, we do not want to concatenate strings, but just add up the no.s
//as per the best practice, we must check the datatype 

function add3(value1, value2) {
    let result3;

    //One Way
    if (typeof (value1) === "number" && typeof (value2) === "number") {
        result3 = value1 + value2;
    }
    else if (typeof (value1) === "string" && typeof (value2) === "string") {
        result3 = "Cannot perform addition";
    }
    console.log(result3);

    //Other Way-  to check given value is string or number
    if (!isNaN(value1) && !isNaN(value2)) {
        result3 = value1 + value2;
    }
    else {
        result3 = "Cannot perform addition";
    }
    console.log(result3);
}

let value1 = 34;
let value2 = 67;
add3(value1, value2); //101

value1 = "Deepa"; value2 = "Prakash";
add3(value1, value2); //Cannot perform addition

//4. Function with Parameters and return value
function add4(value1, value2) {
    return value1 + value2; //return keyword indicates, something is being returned
}

let result4 = add4(19, 7);

if (typeof (result4) === "number") {
    console.log(result4 * 0);
}
console.log(add4(19, 7));

////////////////////////////////////////////////////////////////////////////////////////////////////////

//Test Case- Add 2 values in a function, with the result - multiply it with 5, Add 7 to it

function add5(value1, value2) {
    if (!isNaN(value1) && !isNaN(value2)) {
        return value1 + value2;
    }
    else {
        return "Argument should be numbers";
    }
}

function multi5(resultObj) {
    if (typeof (resultObj) === "number") {
       return resultObj * 5;
    }
    else { return "Argument should be number"; }
}

function add7(resultObj) {
    if (typeof (resultObj) === "number") {
       return resultObj + 7;
    }
    else { return "Argument should be number"; }
}

function onButtonClickEvent()
{
    //console.log("*****Start of Button Click*****")
    let result = add5(22,33);
    //console.log(result + " Add of Result");
    result = multi5(result);
    result = add7(result);

    console.log(result);
}

//Calling Function
onButtonClickEvent(); //282

//Note- Always break big logics into small fragments and put them into functions













