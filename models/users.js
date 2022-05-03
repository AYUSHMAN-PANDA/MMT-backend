const mongoose = require("mongoose");


const audioData = new mongoose.Schema({
    color_1: String,
    color_2: String,
    color_3: String
});

// const survey_Data = new mongoose.Schema({
//     color_1: String,
//     color_2: String,
//     color_3: String
// });

const users = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        trim: true,
    },
    profession: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    colorSelections: {
        type: [audioData],
        required: true
    },
    surveyData: {
        type: audioData,
        required: true
    },
    timeTaken: {
        type: String,
        required: true,
    },
});

// userSchema.plugin(timestamp);

const Users = mongoose.model("Users", users);

module.exports = Users;
