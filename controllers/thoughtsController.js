const Thought = require('./../models/Thought');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((error) => res.status(500).json(error));
    },

    getSingleThought(res, res) {
        Thought.findOne({_id: req.params.thoughtId})
        .then((thought) => !thought ? res.status(404).json({message: 'No thought with that ID'}) : res.json(thought))
        .catch((error) => res.status(500).json(error));
    },

    createThought(req, res) {
        Thought.create(req.body)
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((error) => res.status(500).json(error));
    },

    updateThought(req, res) {
        Thought.findByIdAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((thought) => !thought ? res.status(404).json({message: 'No thought with that ID'}) : res.json(thought))
        .catch((error) => res.status(500).json(error));
    },

    deleteThought(req, res) {
        Thought.findOneAndDelete({_id: req.params.ThoughtId})
        .then((thought) => !thought ? res.status(404).json({message: 'No thought with that ID'}) : res.json(thought))
        .catch((error) => res.status(500).json(error));
    },

    createReaction(req, res) {
        Thought.findByIdAndUpdate(
            {_id: req.params.thoughtId},
            {$addToSet: {reactions: req.body}},
            {runValidators: true, new: true}
        )
        .then((reaction) => !reaction ? res.status(404).json({message: 'No thought with that ID'}) : res.json(reaction))
        .catch((error) => res.status(500).json(error));
    },

    deleteReaction(req, res) {
        Thought.findByIdAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: req.params.reactionId}},
            {runValidators: true, new: true}
        )
        .then((reaction) => !reaction ? res.status(404).json({message: 'No thought with that ID'}) : res.json(reaction))
        .catch((error) => res.status(500).json(error));
    }
}