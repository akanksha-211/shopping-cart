const express = require('express');
// const CategoryService = require('../components/home/CatService');
// const CategoryController = require('../components/home/CatController');

const Router = express.Router();

const path = require('path');

// const catService = new CategoryService();
// const catController = new CategoryController(catService);



Router.get('/login', (req, res) => {
    res.render('login/index.html');
});

Router.get('/register', (req, res) => {
    res.render('register/index.html');
});

// list all the categories
Router.get('/', (req, res) => {
    res.render('home/index.html');
});

Router.get('/products', (req, res) => {
    res.render('products/index.html', { category: req.query.id });
});

Router.get('/error', (req, res) => {
    res.render('error/index.html')
});

module.exports = Router;
