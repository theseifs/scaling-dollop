// document.write("Hello world!");
// console.log("Hi, this is Mitch!");

// var firstName = "Mitch";
// // console.log(firstName);

// var greeting = "Hello world";
// console.log(greeting);
// console.log(greeting.length);
// console.log(greeting.toLowerCase());
// console.log(greeting.includes("e"));
// console.log(greeting.indexOf("e"));
// console.log(greeting.substring(1, 4));

// var name = prompt("Tell me your name!");
// document.write("<h1>Hello, " + name + ", welcome!</h1>");

// var number = 4;
// number += 2;
// console.log(number);
// console.log((number * 2) + 3 / 2);
// console.log("4" * 4);

// function sayHello(name) {
// 	console.log("Hello, " + name);
// }

// sayHello("Mitch");
// sayHello("Bob");
// sayHello("Tom");



// function add() {
// 	var num1 = parseInt(prompt("Please give me a number!"));
// 	var num2 = parseInt(prompt("Now, another number!"));
// 	var sum = addTwoNumbers(5, 6);
// 	console.log(sum);
// }

// function addTwoNumbers(num1, num2) {
// 	return num1 + num2
// }

// add();
// add();
// add();

// function fullName() {
// 	var firstName = prompt("What's your first name?")
// 	var lastName = prompt("What's your last name?")
// 	var fullName = firstName + " " + lastName;
// 	document.write(fullName);
// }

// fullName("Mitch", "Fischer");

// increment(5);

// if ("hey" === "Hey") {
// 	console.log("This is true!");
// } else if (4 === 4) {
// 	console.log("True!");
// } else {
// 	console.log("This is false!");
// }

// function getNumber() {
// 	var number = parseInt(prompt("Please enter a 1 or 2!"));

// 	if (number === 2 || number === 1) {
// 		console.log("Thanks for the " + number + "!");
// 	} else {
// 		console.log("That's not a 1 or a 2...");
// 	}
// }

// getNumber();

// function joke() {
// 	var greeting = prompt("Tell me a joke!");

// 	if (greeting.toLowerCase() === "knock knock") {
// 		console.log("Who's there?");
// 	} else {
// 		console.log("Tell a better joke.");
// 	}
// }

// joke();

// function even(number) {
// 	if (number % 2 === 0) {
// 		console.log("Even!");
// 	} else if (!Number.isInteger(number)) {
// 		console.log("That's not a number.");
// 	} else {
// 		console.log("Odd.");
// 	}
// }

// even(4);
// even(5);
// even("Hello");

// while (4 === 3) {
// 	console.log("True!");
// }

// function logNumbers(number) {
// 	var counter = 0

// 	while (counter < number) {
// 		counter += 1;
// 		console.log(counter);
// 	}
// }

// logNumbers(10);

// for (var i = 1; i <= 10; i += 1) {
// 	console.log(i);
// }

function increment(number) {
	for (var i = 1; i <= number; i += 1) {
		console.log(i);
	}
}

// increment(10);

function letters(string) {
	for (var i = 0; i < string.length; i += 1) {
		console.log(string.charAt(i));
	}
}

letters("Hello world");