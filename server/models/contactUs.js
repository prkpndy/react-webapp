const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

module.exports = mongoose.model("ContactUs", contactUsSchema);
