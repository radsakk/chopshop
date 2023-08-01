const express = require('express');
const router = express.Router();
const User = require('./models/user')

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

router.post('/submitUser', (req, res) => {
    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
        tac: req.body.tac,
    })
    User.collection.insertOne(user)
   .then(result => {
        // go to
        res.render('intex.html')
    })
    .catch(err => console.log(err));
})

module.exports = router;
