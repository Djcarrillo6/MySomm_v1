const mongoose = require('mongoose');
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.set('useCreateIndex', true);


mongoose.connect("mongodb://localhost/mysomm-Db", {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

module.exports.User = require("./User");
module.exports.Message = require("./Message");
