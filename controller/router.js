const express = require('express');
const CategoryService = require('../components/home/CatService');
const CategoryController = require('../components/home/CatController');

const Router = express.Router();

const path = require('path');

const catService = new CategoryService();
const catController = new CategoryController(catService);


// list all the categories
Router.get('/home', (req, res) => {
    // catController.render();
    res.sendFile(path.join(__dirname+'/index.html'));
});



module.exports = Router;
