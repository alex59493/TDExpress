module.exports = {
    app: {
        port: process.env.APP_PORT || 8080
    },
    mongodb: {
        uri: process.env.MONGODB_URI,
    }
};
