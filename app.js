// console.log("hii");
//-------------------------
// {
//     var Cname="saman";
//     let adress="panadura";

// }

// console.log(Cname);
// console.log(adress);
//----------------------------

// const marks ="no";
// marks="yes";
//----------------------------
// const age=[10,20,30];
// console.log(age);

// age = "close";
// console.log(age);

//-------------------------------
// why we use array - data set store , save , data manipiulate(process)
//----------------------


//number[number.length-1]=100;
//console.log(number);

//----------------------------------

/*pop - remove last element
number.pop();
console.log(number);
shift - remove first element
number.shift();
console.log(number);

push - add array
number.push(40);
console.log(number);


 toReversed - reverse array
console.log(number.toReversed());


join - one by join
console.log(number.join("-"));

sort array
console.log(number.toSorted());

length
console.log(number.length);

 get to first index
number.unshift(200);
console.log(number);

indexof - get value index 
console.log(number.indexOf(100));
console.log(number.indexOf(1000));*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------

const number = [10, 20, 60, 100, 30, 50];







/* function addValue() {

    let body = "";

    for (let array of number) {

        body = `
            <tr>${number}</tr> 
        `
    }

    document.getElementById("txtprint").innerHTML = `<h1>${body}</h1>`


}
function getvalue() {

    let display = document.getElementById("txtValue").value;

    number.push(display);

    document.getElementById("txtValue").value = "";

    addValue();

}
function updateArray() {
    let before = document.getElementById("txtbefore").value;

    for (let i = 0; i < number.length; i++) {
        console.log(number[i]);
    }

    document.getElementById("txtafter").innerHTML=



} */


//---------------------------------------------------------------------------------------------------------------------------------------
//functions


//Step 01

// function getSum(num1, num2){
//     return num1 + num2
// }
// console.log(getSum(10,20));

//step 02

// let getSum = function(num1, num2){
//      return num1 + num2
// }
// console.log(getSum(10,20));

//step 03

// let getSum = (num1, num2) => {
//      return num1 + num2
// }

//step 04

// let getSum =num1 => {
//     return num1
// }
// console.log(getSum(10));

//step 05

// let getSum = num1 => num1;
// console.log(getSum(10));

//----------------------------------------------------------------------

nameList = ["sman", "kamal", "amal"];

// call back function (varible ekaka t function ekak dala tiyanawa)

let forLoop = (cName) => {
    console.log(cName);
    
}

nameList.forEach(forLoop);