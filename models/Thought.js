const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
    },
    username: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }
});

const Thought = mongoose.model('Thought', thoughtSchema);
const handleError = (error) => console.log(error);

module.exports = Thought;