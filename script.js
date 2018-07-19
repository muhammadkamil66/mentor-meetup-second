// const appleCost = 10; // given in question
// const mangoCost = 15; // given in question
// const bananaCost = 8; // given in question
// //
// const aliCash = 100; // given in question
// let totalCost;
// //
// let noOfApples = 1; //can be any positive number
// let noOfMangoes = 1; // can be any positive number
// let noOfBananas = 1; // can be any positive number
// //
// totalCost = noOfApples*appleCost + noOfMangoes*mangoCost + noOfBananas*bananaCost;
// //
// if (totalCost > 100 ) {
//     console.log("Sorry, you do not have enough money");
// } else {
//     console.log("Hurray! You have enough money to buy all fruits");
// }


// let customerSays = "Hi"; // can be anything
// // you can use both if-else and switch. It's your choice
// switch(customerSays) {
//     case "Hi":
//     case "Hello":
//     case "Hey":
//     case "Salam":
//         console.log("Thank you for calling TechKaro Customer Service. How may I help you?");
//         break;
//     case "Is UIT open today?":
//         console.log("Yes");
//         break;
//     case "What are the timings of today's class?":
//         console.log("1:30 - 5:3");
//         break;
//     case "Where will the class be conducted?":
//         console.log("At CL-1, Usman Institute");
//         break;
//     default:
//         console.log("Sorry, I do not understand your question");
// }


// let answer = "";
// for (let i = 1 ; i <= 1000 ; i++ ) {
//     if (i !== 1) { // so the ", " does not appear before the first number
//         answer += ", ";
//     }
//     answer += i;
// }
// console.log(answer);


// var person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : "50",
//     eyeColor  : "blue"
// };

// Display some data from the object:
// document.getElementById("demo").innerHTML =
// person.firstName + " is " + person.age + " years old.";











// let carModel = {
//     toyota : "Corolla",
//     color  : "black",
//     model  : 2018,
//     price  : 2500000
// };

// function car(){
// let para = document.querySelector("p");
// para.innerHTML= ("model " + carModel.model + "<br>" + " Color " + carModel.color + "<br>" + "  Toyota " + carModel.toyota + "<br>" + " Price " + carModel.price);
// }






function changeOfSizeCircle(){
	let circle = document.querySelector(".div1");
	let circle2 = document.querySelector(".div2");
	let circle3 = document.querySelector(".div3");
	let newSize = parseInt(Math.random() * 500 + "px");
	// let colors = ["red","orange","purple","green"]
	let red = parseInt(Math.random() * 256);
	let green = parseInt(Math.random() * 256);
	let blue = parseInt(Math.random() * 256);
	let purple = parseInt(Math.random() * 256);
	let orange = parseInt(Math.random() * 256);

	// circle.style.width = "300px";
	circle.style.width = newSize + "px";
	circle2.style.width = newSize + "px";
	circle3.style.width = newSize + "px";
	// circle.style.height = "300px";
	circle.style.height = newSize + "px";
	circle2.style.height = newSize + "px";
	circle3.style.height = newSize + "px";
	circle.style["font-size"] = (newSize / 100) + "em";
	circle2.style["font-size"] = (newSize / 100) + "em";
	circle3.style["font-size"] = (newSize / 100) + "em";
	// console.log(newSize)
	circle.style["background-color"] = "rgb(" + red  + "," + green + ","  + blue + ")";
	circle2.style["background-color"] = "rgb(" + red  + "," + purple + ","  + blue + ")";
	circle3.style["background-color"] = "rgb(" + red  + "," + orange + ","  + blue + ")";
	// circle.style["background-color"] =colors[parseInt(Math.random() * colors.length)];


	// circle.style.color = "red";
	// circle.style.borderColor = "yellow";
	// circle.style.fontSize = "5em";
	// circle.style.backgroundColor = "pink";


}















