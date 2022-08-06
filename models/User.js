const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
          ],
    },
    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thought,'
        }
    ],
    friends: [userSchema.Types.ObjectId],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

//Virtual that retrieves the length of the user's friends array
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const User = mongoose.model('User', userSchema);
const handleError = (error) => console.log(error);

module.exports = User;