# Flashcard-Generator

Overview

In this week's assignment, you will create the backend for a basic flashcard application.

The backend will essentially constitute an API that allows users to create two types of flashcards.

Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").

Cloze-Deleted flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

Cloze Deletions

A cloze deletion is simply a sentence that has had some of its text removed. For example, given the sentence:

"George Washington was the first president of the United States."

...We can create a "cloze deletion" by removing the words "George Washington":

"... was the first president of the United States."

This is useful for building flash card applications that forces users to remember the important part of a sentence, and is a common device in educational applications.

A flash card built this way has three parts:

The full text. This is the entire sentence users need to remember: "George Washington was the first president of the United States."

The cloze deletion. This is the text we've chosen to remove: "George Washington".

The partial text. This is what we get if we remove the cloze deletion from the full text: "... was the first president of the United States.

See below for examples as to how your constructor should behave.

Remember

You will be fully capable of doing this homework by the end of Saturday's class.

Instructions

Create a new GitHub repository, named Flashcard-Generator or something similar. Clone this to your local drive.

Create a BasicCard constructor. It should accept front and back arguments.

Create a ClozeCard constructor. It should accept text and cloze arguments.

ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.

ClozeCard should have a property or method that contains or returns only the partial text.

ClozeCard should have a property or method that contains or returns only the full text.

ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.

Use prototypes to attach these methods, wherever possible.

As your application will not have a front end, your only need to determine an efficient way to store cloze-deleted cards—you don't have to solve the problem of displaying them. You are free to decide how you'd like to implement this. One might represent the above flashcard thus:

The bulk of this assignment is implementing ClozeCard. If you build a robust ClozeCard implementation, feel free to try your hand at implementing a front-end, as well.

Examples

Your constructors should work as follows.

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText): "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze("This doesn't work", "oops"); 
Your property and/or method names can be different, but these examples describe how you would use your flashcard objects.

Bonuses

Write your constructors such that users can call them with or without the new keyword.

Look up scope-safe constructors, and try to implement them. It takes only two additional lines of code.
One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

Good Luck!