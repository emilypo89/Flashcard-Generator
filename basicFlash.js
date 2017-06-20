var inquirer = require("inquirer");
var questionArr = [];
var count = 1;

var BasicCard = function (question, answer) {
	this.question = question;
	this.answer = answer;
	this.questionPush = function() {
		questionArr.push(this.question);
	}
}


var question1 = new BasicCard("Who was the first president?", "George Washington");
var question2 = new BasicCard("What is the US capital?", "DC");
var question3 = new BasicCard("")
console.log(question1.answer);

// var questionDis= this.question;
// console.log(questionDis);
// // console.log(JSON.stringify(questionArr));

// var correctAnswer = this.answer;

BasicCard.prototype.displayQuestion = function() {
  console.log(this.question);
};
	
// console.log(question[count]);
var askQuestion = function() {
// 	var correctAnswer = question[count].answer;
// console.log(question[count].answer);
	if (count < 10){
		for (var i = 0; i < questionArr.length - 1; i >= 0; i--) {
			Things[i]
		}
		question1.displayQuestion();
		inquirer.prompt([
		  {
		    type: "input",
		    message: "Answer: ",
		    name: "answer"
		  }
		]).then(function(user) {
		  console.log(question1.answer);
		  count++;
		  if (user.answer == question1.answer) {
		    console.log("You are correct!");
		  }
		  else {
		    console.log("You are incorrect!" + question1.answer + " is the correct answer.");
		  }
		  askQuestion();
		});
	}
	else {
		console.log("You answered them all!");
	}
}
askQuestion();

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




// // question1.userInput();