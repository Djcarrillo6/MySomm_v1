require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();

const port = 8081;

const errorHandler = require('./controllers/error');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");
const db = require("./models");
const bodyParser = require("body-parser");





app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages", loginRequired, ensureCorrectUser, messageRoutes);

app.get("/api/messages", loginRequired, async function (req, res, next) {
    try {
        let messages = await db.Message.find()
            .sort({ createdAt: "desc" })
            .populate("user", {
                username: true,
                profileImageUrl: true
            });
        return res.status(200).json(messages);
    } catch (err) {
        console.log(err);
        console.log(Message);
        return next(err);
    }
});


app.use(function (req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

const server = app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});


