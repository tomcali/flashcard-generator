# Week 11 Assignment:  flashcard-generator

## Overview
This assignment concerns node.js and its use as a tool for constructing a single-page web application. It sets the stage for later work with node.js as a database and web server. An important part of the assignment involves the use of constructor functions... object oriented JavaScript.

I work through the instructions for the assignment, making a few modifications to accommodate a baseball glossary database that I had constructed. I also explore additional node.js features and packages in the process. 

I made modifications along the way in order to use an already existing file of baseball terms and definitions that I had worked on a couple years ago. 

I wanted to try out the SQLite3 as a database source and use node.js in client-server mode via the HTTP module. Much of this work is similar to what we have seen with MySQL. But with SQLite3, there is no need for an external database server. The database resides in a file. 


## Viewing the Websites
The GitHub repository shows the work on this assignment. To see the work in all of its glory, run it locally from node.js and use a modern browser to bring up a localhost on port 3000. (Using gh-pages or a remote server was not a requirement of this assignment.)

## Requirements
The requirements for this assignment may be found in the file HomeworkInstructions.md, which is enclosed in the repository.

## Technologies Used
* Git/GitHub
* node/npm with initial npm init to set up package.json
* SQLite3 database, which is part of the node.js ecosystem. A very popular package.
* Employed method-lookup alternative to if-else and switch statements a la Eric Elliott's (2014) Programming JavaScript Applications for the rationale behind using a method-lookup pattern. 
* Node module.exports and require for code modularization.
* Initial structure for this was obtained from CodePen https://codepen.io/harrysadlermusic/pen/DihjK Full initial code is under the documentation directory as simple-javascript-quiz


## Coding Process 
* We start with GitHub, setting up the repository for the flashcard generator. 
* Clone the repository and set up the files required for this assignment, including .gitignore. 
* npm init to set up package.json and added packages/modules with --save paramter as in 'npm install request --save' and other packages needed for the assignment.
* Utilize appropriate node packages to complete the tasks required for the assignemnt.
* Set up utilities directory to accommodate user-defined modules.
* Wrote code needed to read the baseball terms and definitions into the SQLite3 database and later read from the database in executing the application. 
* Set up code for defining a localhost of port 3000.
* Set up the control flow for executing the baseball terms examination on the client browser. 
* Set up front-end code for a multiple-choice test, although this code is incomplete. 
  

## Application Testing

We tested the flashcard-generator app using the client application. Set up a localhost on port 3000 and follow the instructions for the multiple-choice test.