const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
    }
// },
// {
//     toJSON: {
//       getters: true,
//     },
//     id: false,
});

module.exports = reactionSchema;