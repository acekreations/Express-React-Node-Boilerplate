const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("../client/public"));

app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Replace 'example with your database name'
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/example");

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
