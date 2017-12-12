const path = require('path');

module.exports = (app) => {
    app.use('/api', require('../api'));

    app.get('/*', (req, res) => {
       res.sendFile(path.join(__dirname, '..', 'views', '404.html'));
    });
};
