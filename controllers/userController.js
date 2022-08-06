const User = require ('./../models/User');

module.exports = {
    getUsers(req, res) {
        User.find()
        .populate('thoughts')
        .then((users) => res.json(users))
        .catch((error) => res.status(500).json(error));
    },

    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
        .populate('thoughts')
        .then((user) => !user ? res.status(404).json({message: 'No user with that ID'}) : res.json(user))
        .catch((error) => res.status(500).json(error));
    },

    createUser(req, res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((error) => res.status(500).json(error));
    },

    updateUser(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((user) => !user ? res.status(404).json({message: 'No user with that ID'}) : res.json(user))
        .catch((error) => res.status(500).json(error));
    },

    deleteUser(req, res) {
        User.findOneAndDelete({_id: req.params.userId})
        .then((user) => !user ? res.status(404).json({message: 'No user with that ID'}) : res.json(user))
        .catch((error) => res.status(500).json(error));
    }
}