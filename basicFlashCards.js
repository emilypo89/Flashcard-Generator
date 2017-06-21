var inquirer = require("inquirer");
var questionArr = [];
var answerArr = [];
var count = 0;

// constructive function for the BasicCard questions and answers
var BasicCard = function (question, answer) {
	this.question = question;
	this.answer = answer;
	this.questionAnswerPush = function() {
		questionArr.push(this.question);
		answerArr.push(this.answer);
	}
}

// creation of new BasicCards
var question1 = new BasicCard("What kind of threading does Node.js use?", "asynchronous");
var question2 = new BasicCard("What does HTML stand for?", "hypertext markup language");
var question3 = new BasicCard("What does 'fs' stand for?", "file system");
var question4 = new BasicCard("What function do you use to request information from an API?", "ajax");
var question5 = new BasicCard("What are the nouns of programming?", "variables");
var question6 = new BasicCard("What takes a user's requests and then sends information back?", "server");
var question7 = new BasicCard("What is required when you define or access JQuery?", "$");
var question8 = new BasicCard("What does CSS stand for?", "cascading style sheets");
var question9 = new BasicCard("What does JSON stand for?", "javascript object notation");
var question10 = new BasicCard("Firebase is a type of?", "database");

// pushing questions and answers into their own array
question1.questionAnswerPush();
question2.questionAnswerPush();
question3.questionAnswerPush();
question4.questionAnswerPush();
question5.questionAnswerPush();
question6.questionAnswerPush();
question7.questionAnswerPush();
question8.questionAnswerPush();
question9.questionAnswerPush();
question10.questionAnswerPush();


console.log("Test your knowledge about Coding!!!");
console.log("-----------------------------------");

// function to display questions
var displayQuestion = function() {
		console.log(questionArr[count]);
};

// function to display questions/get user input/display answers
var askQuestion = function() {
	if (count < 10){
		// displaying questions
		displayQuestion();
		// prompting the user for a response
		inquirer.prompt([
		  {
		    type: "input",
		    message: "Answer: ",
		    name: "answer"
		  }
		]).then(function(user) {
		  // checking the user input to the correct answer
		  if (user.answer == answerArr[count]) {
		    console.log("You are correct!");
		    console.log("----------------");
		  }
		  else {
		    console.log("You are incorrect!" + answerArr[count] + " is the correct answer.");
		    console.log("-----------------------------------------------------------------");
		  }
		  count++;
		  // asking the next question
		  askQuestion();
		});
	}
	else {
		console.log("You answered them all, good job!");
		console.log("----------------------");
	}
}
// calling function to beginaskQuestion();

