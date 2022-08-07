// const { Reaction, Thought, User } = require('../models');
const Thought = require('./../models/Thought');
const User = require('./../models/User');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((error) => res.status(500).json(error));
    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) => !thought ? res.status(404).json({ message: 'No thought with that ID' }) : res.json(thought))
            .catch((error) => res.status(500).json(error));
    },

    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: thought } },
                    { new: true },
                );
            })
            .then((thoughtAdded) => !thoughtAdded ? res.status(404).json({ message: 'No user with that ID' }) : res.json(thoughtAdded))
            .catch((error) => res.status(500).json(error))
    },

    updateThought(req, res) {
        Thought.findByIdAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) => !thought ? res.status(404).json({ message: 'No thought with that ID' }) : res.json(thought))
            .catch((error) => res.status(500).json(error));
    },

    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) => !thought ? res.status(404).json({ message: 'No thought with that ID' }) : res.json({ message: 'Thought deleted.' }))
            .catch((error) => res.status(500).json(error));
    },

    createReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$addToSet: {reactions: req.body}},
            {new: true, runValidators: true}
        )
            .then((reaction) => !reaction ? res.status(404).json({ message: 'No thought with that ID' }) : res.json(reaction))
            .catch((error) => res.status(500).json(error));
    },

    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: {_id: req.params.reactionId} } },
            { new: true }
        )
            .then((reaction) => !reaction ? res.status(404).json({ message: 'No thought with that ID' }) : res.json("reaction deleted"))
            .catch((error) => res.status(500).json(error));
    }
}