// make-flash.js  makes flashcards in two styles
// utilizes constructor functions and method-lookup pattern

var fs = require('fs');

// ---------- FUNCTION logToFileHelper ----------
// helper function for logging to external file log.txt
function logToFileHelper(file, textData) {
  fs.appendFile(file, textData, 'utf8', function(err) {
    if (err) {
      throw err;
      console.log('log file writing error reported to log.txt');
    };
  });
}

// ---------- FUNCTION makeBasic ----------
function makeBasic() {
	console.log('executing makeBasic function');
}

// ---------- FUNCTION makeCloze ----------
function makeCloze() {
	console.log('executing makeCloze function');
}

// ---------- FUNCTION whatToDo ----------
// method-lookup is a best practice JavaScript pattern
// we can use it in place of if-else and switch statements
// to select across possible options for making flashcards
function whatToDo(action) {
	var actions = {
		'basic': function() {
			makeBasic()
		},
		'cloze': function () {
			makeCloze()
	    }
	};    

	if (typeof actions[action] !== 'function') {
		console.log('\n\nenter one of two possible command lines for flashcards:');
		console.log('node make-flash.js basic');
		console.log('node make-flash.js cloze\n\n')
	}
    else return actions[action](); // run the function for type of card
} // end of method-lookup function whatToDo

// read the command line to determine the type of flashcard
var action = process.argv[2];

// call function to generate the type of flashcard requested
whatToDo(action);


