# Week 11 Assignment:  flashcard-generator

## Overview
This assignment concerns node.js and its use as a tool for constructing a single-page web application. It sets the stage for later work with node.js as a database and web server. 

I work through most of instructions for the assignment, making a few modifications and exploring few additional node.js features and packages in the process. 

I made modifications along the way in order to use an already existing file of baseball terms and definitions that I had worked on a couple years ago. Also, making flashcards did not seem particularly useful. Who prints flashcards these days? But setting up a client-server testing/practice facility seemed like something that might be useful in the future. So the optional front-end part of this assignment was part of my focus.

I wanted to try out the SQLite3 as a database source and use node.js in client-server mode via the HTTP module. Later in the bootcamp program, of course, we will see MySql and Express alternatives for database and client-server work. 


## Viewing the Websites
The GitHub repository shows the work on this assignment. To see the work in all of its glory, run it locally from node.js and use a modern browser to bring up a localhose on port 3000. (Using gh-pages or a remote server was not a requirement of this assignment.)

## Requirements
The requirements for this assignment may be found in the file HomeworkInstructions.md, which is enclosed in this repository.

## Technologies Used
* Git/GitHub
* node/npm with initial npm init to set up package.json
* SQLite3 database, which is part of the node.js ecosystem. A very popular package.
* Employed method-lookup alternative to if-else statement a la Eric Elliott's (2014) Programming JavaScript Applications for the rationale behind using a method-lookup pattern. 
* Node module.exports and require for code organization.
* Initial structure for this was obtained from CodePen https://codepen.io/harrysadlermusic/pen/DihjK Full initial code is under the documentation directory as simple-javascript-quiz


## Coding Process 
* We start with GitHub, setting up the repository for the flashcard generator. 
* Clone the repository and set up the files required for this assignment, including .gitignore, keys.js, random.txt, and liri.js 
* npm init to set up package.json and added packages/modules with --save paramter as in 'npm install request --save' and other packages needed for the assignment.
* Utilize appropriate node packages to complete the tasks required for the assignemnt.
* Set up utilities directory to accommodate user-defined modules.
* Set up front-end code for a multiple-choice test. 
* Wrote code needed to read the baseball terms and definitions into the SQLite3 database and later read from the database in executing the application.
* Set up code for defining a localhost of port 3000.
* Set up the control flow for executing the baseball terms examination on the client browser.
  

## Application Testing

We tested the flashcard-generator app using the client application. Set up a localhost on port 3000 and follow the instructions for the multiple-choice test.