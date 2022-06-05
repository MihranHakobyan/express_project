require('dotenv').config();


const config = {
    PORT: process.env.PORT || 3000,
    DB_HOSTNAME: process.env.HOSTNAME || 'localhost',
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD
};
Object.freeze(config);

module.exports = config;