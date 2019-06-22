const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/imprintdb"
);

const userSeed = [
  {
    username: "Admin",
    password: "testpass",
    firstName: "Admin",
    lastName: "Account",
    cardType: "Personal",
    companyName: "imprint Inc.",
    email: "projectimprint@projectimprint.inc",
    phone: "(718)123-4567",
    website: "project-imprint.herokuapp.com",
    street: "123 Fake St.",
    city: "New York",
    state: "NY",
    zipcode: 10003
  },
  {
    username: "Henry",
    password: "testpass",
    firstName: "Admin",
    lastName: "Account",
    cardType: "Personal",
    companyName: "imprint Inc.",
    email: "projectimprint@projectimprint.inc",
    phone: "(718)123-4567",
    website: "project-imprint.herokuapp.com",
    street: "123 Fake St.",
    city: "New York",
    state: "NY",
    zipcode: 10003
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
