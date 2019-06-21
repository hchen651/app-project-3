const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = require("./card");

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    cardType: String,
    companyName: String,
    email: String,
    phone: String,
    website: String,
    street: String,
    city: String,
    state: String,
    zipcode: Integer,
    cards: [cardSchema]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
