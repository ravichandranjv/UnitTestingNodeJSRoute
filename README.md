# UnitTestingNodeJSRoute
Unit testing a Node Js express web app route.

Pre-requisites - Node Js - https://nodejs.org, Mocha - npm install mocha --save-dev, supertest - npm install supertest --save-dev, assert - npm install assert --save-dev, expressjs - npm install express --save-dev

Since Node JS does not provide for a web server, express.js is used to fulfill the http needs of a Node web app. But since unit testing a web app should happen in an isolated form and not require frequent re-starting of the server, supertest helps by starting the express.js server script and running the mocha tests on it.

Navigate to the test folder. Run "Mocha usertest.js"
