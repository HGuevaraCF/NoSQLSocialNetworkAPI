const Thought = require('./../models/Thought');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((error) => res.status(500).json(error));
    },

    getSingleThought(res, res) {
        Thought.findOne({_id: req.params.ThoughtId})
        .then((thought) => !thought ? res.status(404).json({message: 'No thought with that ID'}) : res.json(thought))
        .catch((error) => res.status(500).json(error));
    },

    createThought(req, res) {

    },

    updateThought(req, res) {

    },

    deleteThought(req, res) {
        Thought.findOneAndDelete({_id: req.params.ThoughtId})
        .then((thought) => !thought ? res.status(404).json({message: 'No thought with that ID'}) : res.json(thought))
        .catch((error) => res.status(500).json(error));
    }
}