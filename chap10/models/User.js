const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String
});
// export model
const User = mongoose.model('User', UserSchema);
module.exports = User