var questions = require("./questions.json");
var inquirer = require("inquirer");

var count = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

// constructive function
 var ClozeCard = function(text, cloze){
 	this.text = text;
 	this.cloze = cloze;
 }
// prototype to add partial function to the constructive function
ClozeCard.prototype.partial = function (){
	console.log(this.text.replace(this.cloze, "....."));
}
// prototype to the fullText function to the constructive function
ClozeCard.prototype.fullText = function() {
	console.log(this.text);
}

console.log("Test your knowledge about Coding!!!");
console.log("-----------------------------------");

// function to display question and for user to input answers
var askQuestion = function() {
	if (count < 10){
		// creating new clozeCards
		var clozeCard = new ClozeCard(questions[count].text, questions[count].cloze);
		// displaying questions
		clozeCard.partial();
		
		// prompting the user for a response
		inquirer.prompt([
		  {
		    type: "input",
		    message: "Answer: ",
		    name: "answer"
		  }
		]).then(function(user) {
		  // checking the user input to the correct answer
		  if (user.answer.toLowerCase() == clozeCard.cloze.toLowerCase()) {
		  	clozeCard.fullText();
		    console.log("You are correct!");
		    console.log("----------------");
		    correctAnswers++;
		  }
		  else {
		  	clozeCard.fullText();
		    console.log("You are incorrect!" + clozeCard.cloze + " is the correct answer.");
		    console.log("-----------------------------------------------------------------");
		    incorrectAnswers++;
		  }
		  count++;
		  // asking the next question
		  askQuestion();
		});
	}
	else {
		console.log("You answered them all, good job!");
		console.log("----------------------");
		console.log("You answered " + correctAnswers + " questions correctly!");
		console.log("You answered " + incorrectAnswers + " questions incorrectly!");
	}
}

// calling the askQuestion function the first time
askQuestion();