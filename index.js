const express = require('express');
const Router = require('./controller/router');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var engines = require('consolidate');

app.engine('html', engines.mustache);
app.set('views', path.join(__dirname, 'components')); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/static'));
app.set('view engine', 'html');


app.use('/', Router);
app.listen(8082, () => console.log('Running the express module!!!'));