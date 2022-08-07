const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    // rectionId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     default: () => new Types.ObjectId()
    // },
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
        default: Date.now
    }
},
{
    toJSON: {
      getters: true,
    },
    id: false,
});

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
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
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