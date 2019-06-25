const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://henry:crew92@ds261486.mlab.com:61486/heroku_mf63n599"
);

const userSeed = [
  {
    password: "testpass",
    firstName: "Admin",
    lastName: "Account",
    cardType: "Personal",
    companyName: "imprint Inc.",
    email: "project@imprint.inc",
    phone: "(718)123-4567",
    website: "project-imprint.herokuapp.com",
    street: "123 Fake St.",
    city: "New York",
    state: "NY",
    zipcode: 10003
  },
  {
    password: "testpass",
    firstName: "Henry",
    lastName: "Chen",
    cardType: "Personal",
    companyName: "imprint Inc.",
    email: "henry@imprint.inc",
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
