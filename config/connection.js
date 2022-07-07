const { connect, connection } = require('mongoose');

connect('mongodb://localhost/SocialNetworkApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;