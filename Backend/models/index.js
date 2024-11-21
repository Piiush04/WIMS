const mongoose = require("mongoose");
require("dotenv").config(); // To use environment variables

// MongoDB connection URI from environment variables
const uri = process.env.MONGODB_URI || "your-default-uri-here";

function main() {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });
}

module.exports = { main };
