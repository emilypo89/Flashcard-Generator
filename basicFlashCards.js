var inquirer = require("inquirer");

var BasicCard = function (question, answer) {
	this.question = question;
	this.answer = answer;
	this.displayQuestion = function(){
		console.log(this.question);
	}
	this.askQuestion = function() {
		var correctAnswer = this.answer;
		if (count < 10){

		}

		inquirer.prompt([
		  {
		    type: "input",
		    message: "Answer: ",
		    name: "answer"
		  }
		]).then(function(user) {
		  console.log(correctAnswer)
		  if (user.answer == correctAnswer) {
		    console.log("You are correct!");
		  }
		  else {
		    console.log("You are incorrect!" + correctAnswer + " is the correct answer.");
		  }
		});
	}
}

var question1 = new BasicCard("Who was the first president?", "George Washingon");
var question2 = new BasicCard("What is the US capital?", "DC");

question1.displayQuestion();
question1.askQuestion();
question2.displayQuestion();
question2.askQuestion();
var count = 0;
// var correctAnswer = this.answer;

// var askQuestion = function() {
//   // if statement to ensure that our questions are only asked five times
//   if (count < 10) {
//     // runs inquirer and asks the user a series of questions whose replies are
//     // stored within the variable answers inside of the .then statement
//     question1.displayQuestion();
//     inquirer.prompt([
// 		  {
// 		    type: "input",
// 		    message: "Answer: ",
// 		    name: "answer"
// 		  }
//     ]).then(function(user) {
//     		console.log(correctAnswer)
// 			  if (user.answer == correctAnswer) {
// 			    console.log("You are correct!");
// 			  }
// 			  else {
// 			    console.log("You are incorrect!" + correctAnswer + " is the correct answer.");
// 			  }
      
//       count++;
//       // run the askquestion function again so as to either end the loop or ask the questions again
//       askQuestion(question2);
//     });
//     // else statement which prints "all questions asked" to the console
//     // when the code has been run five times
//   }
//   else {
//     console.log("All questions asked");
//   }
// };

// // call askquestion to run our code
// askQuestion();




// question1.userInput();