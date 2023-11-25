# Intro
This is a server-side implementation for handling `ContactUs` mutation.

# How to use
* Install all the dependencies.
* Create a database in mongodb and put the url in `app.js` file in the suggested format.
* Create env variables by the name `MONGO_ATLAS_USER` and `MONGO_ATLAS_PW` to store the username and password of your mongodb username and password respectively.
* If you are using `nodemon` to run your server, you can create `nodemon.json` file in `./server` directory with the env variables.
* Run the server using `nodemon server.js` at port 3006.