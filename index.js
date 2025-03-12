const express = require("express");
// import and install your mongoose

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// create a catSchema with name, age, color, adopted (boolean), and hasShots (boolean)

// connect your schema to a model called Cat

// write an async function called startServer
// inside make sure to connect to mongoose w/ your SRV string
// inside start your server at port 3000

    // Before you run your code, uncomment the following
    // await new Cat({
    //     name: "Whiskers",
    //     age: 1,
    //     color: "orange",
    //     adopted: false,
    //     hasShots: true
    // }).save();

    // await new Cat({
    //     name: "Pawlina",
    //     age: 3,
    //     color: "black",
    //     adopted: true,
    //     hasShots: true
    // }).save();


// call startServer

// create a route handler for /cats that returns all cats

// create a route handler for /cats/adopt that returns only cats that haven't been adopted

// create a route handler for /cats/add to saves a new cat to the collection

