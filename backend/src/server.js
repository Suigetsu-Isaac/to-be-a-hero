const app = require('./app');
require('dotenv/config');
app.listen(process.env.APP_URL);