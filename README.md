# Week 11 Assignment:  flashcard-generator

## Overview
This assignment concerns node.js and its use as a tool for constructing flashcards written to external files. It sets the stage for later work with node.js. An important part of the assignment involves the use of constructor functions (i.e. object oriented JavaScript).

I work through the instructions for the assignment, making a few modifications to accommodate data from a baseball glossary database that I had constructed for another purpuse. I explore additional node.js features and the fs package once again.  

I also started work on a full-stack app for administering a multiple choice test, thinking that the flashcard app could later be used for such purposes. This work utilized the node http package, setting up a localhost server on port 3000.


## Viewing the App
The GitHub repository shows the work on the assignment. To see the work in all of its glory, run make-flash.js locally from node.js using the command line with one of two arguments as follows

node make-flash.js basic OR
node make-flash.js cloze


## Requirements
The requirements for this assignment may be found in the file HomeworkInstructions.md, which is enclosed in the repository. There is additional documentation for the assignment under the documentation-code-examples directory.

## Technologies Used
* Git/GitHub
* node/npm with initial npm init to set up package.json
* Employed method-lookup alternative to if-else and switch statements a la Eric Elliott's (2014) Programming JavaScript Applications for the rationale behind using a method-lookup pattern. 
* node.js package fs for writing flashcards to external files
* For the incomplete full-stack app, the initial structure for this was obtained from CodePen https://codepen.io/harrysadlermusic/pen/DihjK Full initial code is under the documentation directory as simple-javascript-quiz


## Coding Process 
* We start with GitHub, setting up the repository for the flashcard generator. 
* Clone the repository and set up the files required for this assignment, including .gitignore. 
* npm init to set up package.json with the ability to add packages/modules with --save paramter as in 'npm install http --save' 
* Utilize appropriate node packages to complete the tasks required for the assignemnt, writing flashcards to the external files basic.txt and cloze.txt 
* Set up utilities directory to accommodate user-defined modules.
* Wrote code generate flashcards in two styles using score-safe constructor functions. 
* For the incomplete full-stack app, I set up code for defining a localhost of port 3000. Set up the control flow for executing the baseball terms examination on the client browser. And I set up front-end code for a multiple-choice test, although this code is incomplete. What is needed for future development is to merge the two apps that are currently in separate programs make-flash.js and myserver.js
  

## Application Testing

We tested the flashcard-generator app using the client application. 

For basic flashcards, we execute the following command line interface instruction: node make-flash.js basic

The following cards are printed to the file basic.txt:

Item 1
What term is described by this definition?
From the batter's point of view, a situation in which he has more balls than strikes.  Opposite of behind in the count.
Answer: ahead in the count

Item 2
What term is described by this definition?
In Major League Baseball, a game played toward the middle of the baseball season with players selected from various teams for their exceptional skills.
Answer: All Star Game

Item 3
What term is described by this definition?
In Major League Baseball, one of two leagues composed of fifteen teams, five in each of three divisions. This league allows the designated hitter.
Answer: American League

Item 4
What term is described by this definition?
Baseball slang for throwing the ball around the infield after completing a play with no one on base.
Answer: around the horn

Item 5
What term is described by this definition?
Batting appearance in which the batter does not receive a base-on-balls (walk), is not hit by a pitch, and does not sacrifice (by bunt of sacrifice fly). The total at bats is used as the denominator in computing a player's batting average.  A subset of plate appearances.
Answer: at bats (AB)

For cloze cards, we execute the following instruction:
node make-flash.js cloze

And we obtain close flashcards in the file cloze.txt as follows:

Item 1
A ________ is described by this definition:
From the batter's point of view, a situation in which he has more balls than strikes.  Opposite of behind in the count.
[Fill in the blank]
Answer:ahead in the count

Item 2
A ________ is described by this definition:
In Major League Baseball, a game played toward the middle of the baseball season with players selected from various teams for their exceptional skills.
[Fill in the blank]
Answer:All Star Game

Item 3
A ________ is described by this definition:
In Major League Baseball, one of two leagues composed of fifteen teams, five in each of three divisions. This league allows the designated hitter.
[Fill in the blank]
Answer:American League

Item 4
A ________ is described by this definition:
Baseball slang for throwing the ball around the infield after completing a play with no one on base.
[Fill in the blank]
Answer:around the horn

Item 5
A ________ is described by this definition:
Batting appearance in which the batter does not receive a base-on-balls (walk), is not hit by a pitch, and does not sacrifice (by bunt of sacrifice fly). The total at bats is used as the denominator in computing a player's batting average.  A subset of plate appearances.
[Fill in the blank]
Answer:at bats (AB)


To see the beginnings of the full-stack app, set up a localhost on port 3000 and follow the instructions for the multiple-choice test.