const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = require("./card");

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
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
        min: [5, 'Please enter a valid ZIP code.'],
        max: [5, 'Please enter a valid ZIP code.'],
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    //cards: [cardSchema]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
