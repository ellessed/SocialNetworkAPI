# SocialNetworkAPI

This project aims to build an API for a social netowrk web application where users can share their thoughts, react to friends thoughts and create a friend list.
Express.js is utilised for routing, a MongoDB database, and the Mongoose ODM.

## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation

Download code from the repo, load Vs code and ensure you are in the correct folder, initialise the code by typing into the terminal:
npm i

## Using the code

To initialise the db you will run the following commands: npm run start
go to the Insomnia or Postman App, where you will able to interact with the database via the back end routes.

Once you have finished using the database, be sure to run (ctrl+C) or (^C) to close down the session.

The code files are fully commented, to explain the flow and logic of the code, so that others can work on this and expand on it too.

## link to video
