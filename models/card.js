const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    cardType: String,
    companyName: String,
    email: String,
    phone: String,
    website: String,
    street: String,
    city: String,
    state: String,
    zipcode: Integer
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
