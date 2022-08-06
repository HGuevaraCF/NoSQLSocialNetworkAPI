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
        default: Date.now
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    reactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reactions'
        },
    ],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

//Virtual that retrieves the length of the thought´s reactions array
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = mongoose.model('Thought', thoughtSchema);
const handleError = (error) => console.log(error);

module.exports = Thought;