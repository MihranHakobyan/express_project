const express = require(`express`);
const sequelize = require(`./db/conection`);
const config = require('./configs/config');

const PORT = config.PORT;

const app = express();

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`server listeninig on port ${PORT}`);
        });
        await sequelize.authenticate();
        console.log('database successfully connected');

    } catch (err) {
        console.log('Unable to connect to the database ' + err.message);
    }
}

start();

