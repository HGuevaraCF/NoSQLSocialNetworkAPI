const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/SocialNetworkApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;