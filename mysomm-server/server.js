require("dotenv").config();
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const { addUser, removeUser, getUser, getUsersInRoom } = require('../mysomm-client/src/store/actions/chat.js');


const port = 8081;



const errorHandler = require('./controllers/error');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');
const chatRoutes = require('./routes/chat');
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");
const db = require("./models");
const bodyParser = require("body-parser");



app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages", loginRequired, ensureCorrectUser, messageRoutes);
app.use(chatRoutes);


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



server.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});



// Socket.io Code Block
io.on('connection', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return callback(error);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the chat room ${user.room}` });

        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `**${user.name}, has joined the chat!**` });

        socket.join(user.room);

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });

    // Admin sent msgs =='message', user msgs == 'sendMessage' 
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `**${user.name} has left the chat.**` });
        };
    });

});


