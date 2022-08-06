const router = require('express').Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought, createReaction, deleteReaction } = require('./../../controllers/thoughtsController');

//api/thoughts
router.route('/').get(getThoughts).post(createThought);

//api/thoughts/:toughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//api/thoughts/:thoughtId/reactions
router.route('/:thoughthId/reactions').put(createReaction);

//api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughthId/reactions/:reactionId').put(deleteReaction);

module.exports = router;