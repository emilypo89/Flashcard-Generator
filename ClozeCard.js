 // This file should define a Node module that exports a constructor for creating cloze-deletion 
 // flashcards, e.g.: `module.exports = ClozeCard;`
 //  * The constructor should accept two arguments: `text` and `cloze`.
 //  * The constructed object should have a `cloze` property that contains _only_ the cloze-deleted
  // portion of the text.
 //  * The constructed object should have a `partial` property that contains _only_ the partial text.
 //  * The constructed object should have a `fullText` property that contains _only_ the full text.
 //  * The constructor should throw or log an error when the cloze deletion does _not_ appear in the
  // input text.
 //  * Use prototypes to attach these methods, wherever possible.
var questions = require("./questions.json");
var inquirer = require("inquirer");

var count = 0;

 var ClozeCard = function(text, cloze){
 	this.text = text;
 	this.cloze = cloze;
 }

ClozeCard.prototype.partial = function (){
	console.log(this.text.replace(this.cloze, "....."));
}

ClozeCard.prototype.fullText = function() {
	console.log(this.text);
}


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
		  if (user.answer == clozeCard.text) {
		  	clozeCard.fullText();
		    console.log("You are correct!");
		    console.log("----------------");
		  }
		  else {
		  	clozeCard.fullText();
		    console.log("You are incorrect!" + clozeCard.cloze + " is the correct answer.");
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

askQuestion();