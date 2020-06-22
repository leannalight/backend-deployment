const { JWT_SECRET, NODE_ENV } = process.env;

module.exports.PrivateKey = NODE_ENV !== 'production' ? 'some-dev-secret' : JWT_SECRET;
