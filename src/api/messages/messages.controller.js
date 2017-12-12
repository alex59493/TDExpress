const Message = require('./message.model');

module.exports = {};

module.exports.findAll = (req, res) => {
    Message.find({}, (err, messages) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(messages);
    });
};

module.exports.findOne = (req, res) => {
    Message.findOne(
        {_id: req.params.id},
        (err, message) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.status(200).json(message);
        }
    );
};

module.exports.create = (req, res) => {
    const message = new Message(req.body);
    message.save((err) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(message)
    });
};

module.exports.update = (req, res) => {
    const { author, message } = req.body;

    Message.update(
        {_id: req.params.id},
        {
            $set : {
                author,
                message,
            }
        },
        {multi: true},
        (err, n) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.status(200).json('');
        }
    );
};

module.exports.delete = (req, res) => {
    Message.deleteOne(
        {_id: req.params.id},
        (err) => {
            if (err) {
                return res.status(500).json(err);
            }
            res.status(200).json('');
        }
    );
};
