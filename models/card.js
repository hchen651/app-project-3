const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    firstName: String,
    lastName: String,
    cardType: String,
    companyName: String,
    email: String,
    phone: String,
    website: String,
    street: String,
    city: String,
    state: String,
    zipcode: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    }
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
