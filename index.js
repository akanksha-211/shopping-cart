const express = require('express');
const Router = require('./controller/router');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'html');
app.get("/",function  (req,res) { 
    app.render('./controller/index.html', {}, function(err, html) {
        console.log('app render')
    })
});

app.use('/', Router);
app.listen(8082, () => console.log('Running the express module!!!'));