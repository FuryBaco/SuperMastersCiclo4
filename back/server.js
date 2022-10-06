const app = require('./app');

// Language: javascript
// Path: back\server.js
// Set the configuration for the server

const dotenv = require('dotenv');
dotenv.config({ path: 'back/config/config.env' });

const server= app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} in mode ${process.env.NODE_ENV}.`);
});