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

// scope-safe constructor for basic flashcards
// allows creation of basic instances without the new keyword
function Basic(item, front, back) {
	if (this instanceof Basic) {
	this.item = item;
	this.front = front;
	this.back = back;
	this.card = function() {
		console.log('\n\nItem', this.item,
			'\nWhat term is described by this definition?\n',
			this.front,
			'\nAnswer:', this.back)};
	} else {
		return new Basic(item, front, back);
	}
} // end of function Basic scope-safe constructor

function Cloze(item, front, back) {
	if (this instanceof Basic) {
	this.item = item;
	this.front = front;
	this.back = back;
	this.card = function() {
		console.log('\n\nItem', this.item,
			'\nA ________ is described by this definition:\n',
			this.front, '\n[Fill in the blank]',
			'\nAnswer:', this.back)};
	} else {
		return new Cloze(item, front, back);
	}
} // end of function Cloze scope-safe constructor


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

// here we set up arrays with the data needed for the cards
// just five terms used here for testing the app
var term = ['ahead in the count',
'All Star Game',
'American League',
'around the horn',
'at bats (AB)'
];

var definition = ["From the batter's point of view, a situation in which he has more balls than strikes.  Opposite of behind in the count",
"In Major League Baseball, a game played toward the middle of the baseball season with players selected from various teams for their exceptional skills.",
"In Major League Baseball, one of two leagues composed of fifteen teams, five in each of three divisions. This league allows the designated hitter.",
"Baseball slang for throwing the ball around the infield after completing a play with no one on base.",
"Batting appearance in which the batter does not receive a base-on-balls (walk), is not hit by a pitch, and does not sacrifice (by bunt of sacrifice fly). The total at bats is used as the denominator in computing a player's batting average.  A subset of plate appearances."
];




















// read the command line to determine the type of flashcard
var action = process.argv[2];

// call function to generate the type of flashcard requested
whatToDo(action);


