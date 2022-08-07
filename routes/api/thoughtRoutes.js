const router = require('express').Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought, createReaction, deleteReaction } = require('./../../controllers/thoughtsController');

//api/thoughts
router.route('/').get(getThoughts).post(createThought);

//api/thoughts/:toughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').put(createReaction);

//api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;