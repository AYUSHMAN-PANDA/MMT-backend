const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const config = require("./config_mongo");



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(config.PORT, () => {
    mongoose.connect(config.MONGODB_URI, {
        useNewUrlParser: true,
    });
});


const db = mongoose.connection;

db.on("error", (err) => console.log(err));

db.once("open", () => {
    require("./routes/userRoutes")(app);
    console.log(`server started on port ${config.PORT}`);
});

