const express = require('express')
const app = express()
const port = 9000
const path = require('path');
const morgan = require('morgan');
var compression = require('compression');
const router = require('./router.js');

//serve files from dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// compress files coming in
app.use(compression());

//See all incoming requests
app.use(morgan('dev'));

//JSON requests
app.use(express.json());

//route all requests
app.use('/', router);

//notification on open server
app.listen(port, () => console.log(`listening on port ${port}!`));