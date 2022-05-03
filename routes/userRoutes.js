const users = require("../models/users");


module.exports = (server) => {

    server.get("/allUsers", async (req, res, next) => {
        try {
            const allUsers = await users.find();
            res.send(allUsers);
            next();
        }
        catch (err) {
            return next(err);
        }
    });

    server.post("/addUser", async (req, res, next) => {
        console.log(req.body.user_id);
        const new_user = new users({
            user_id: req.body.user_id,
            age: req.body.age,
            profession: req.body.profession,
            gender: req.body.gender,
            colorSelections: req.body.colorSelections,
            surveyData: req.body.surveyData,
            timeTaken: req.body.timeTaken,

        })

        new_user
            .save()
            .then((res) => {
                res.send(201);
            })
            .catch((err) => {
                res.send(err);
            });
    });

}