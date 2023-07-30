const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('intex')
})

router.get('/404', (req, res) => {
    res.render('404')
})

router.get('/best', (req, res) => {
    res.render('best')
})

router.get('/discount', (req, res) => {
    res.render('discount')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/product', (req, res) => {
    res.render('product')
})

router.get('/search', (req, res) => {
    res.render('search')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

module.exports = router;