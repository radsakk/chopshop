// import
const express = require('express');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const route = require('./route/pages');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', route);

 mongoose.connect("mongodb+srv://LeoH:742617000027@cluster0.sfckoge.mongodb.net/chopshopDB", {useNewURLParser: true, useUnifiedTopology: true})
 .then(() => {
    app.listen(3000, () => {
        console.log("server is running on 3000")
    })
 })

// firebase admin setup
//let serviceAccount = require("");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

//let db = admin.firestore();

// static path
// let staticPath = path.join(__dirname, "public");

// // const port = 3000

// app.use(express.static(staticPath));
// app.use(express.json());

// // home
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"))
// })

// // login
// app.get('/signup', (req, res) => {
//     res.sendFile(path.join(staticPath, "signup.html"));
// })

// // sign up
// app.post('/signup', (req, res) => {
//     let { name, email, password, number, tac, notification } = req.body;

//     // validating
//     if(name.length < 3){
//         return res.json({'alert': 'name must be at least 2 letters long'});
//     } else if(!email.length){
//         return res.json({'alert': 'enter your email'});
//     } else if(password.length < 8){
//         return res.json({'alert': 'password should be 8 letters long'});
//     } else if(!number.length){
//         return res.json({'alert': 'enter your phone number'});
//     } else if(!Number(number) || number.length < 10){
//         return res.json({'alert': 'invalid number, please enter valid one'});
//     } else if(!tac){
//         return res.json({'alert': 'you must agree to our terms and conditions'});
//     } 

//     // store user info in db
//     db.collection('users').doc(email).get()
//     .then(user => {
//         if(user.exists) {
//             return res.json({'WARNING' : 'email already exist'})
//         } else {
//             // ecrypt password
//             bcrypt.genSalt(10, (err, salt) => {
//                 bcrypt.hash(password, salt, (err, hash) => {
//                     req.body.password = hash;
//                     db.collection('users').doc(email).set(req.body)
//                     .then(data => {
//                         res.json({
//                             name: req.body.name,
//                             email: req.body.email,
//                             seller: req.body.name,

//                         })
//                     })
//                 })
//             })
//         }
//     })
// })

// // login
// app.get('/login', (reg, res) => {
//     res.sendFile(path.join(staticPath, "login.html"))
// })

// app.post('/login', (req, res) => {
//     let { email, password } = req.body;

//     if(!email.length || !password.length){
//         return res.json({'alert': 'fill all the inputs'})
//     }

//     db.collection('users').doc(email).get().then(user => {
//         if(!user.exist){
//             return res.json({'alert':'log in email does not exists'})
//         } else {
//             bcrypt.compare(password, user.data().password, (err, result) => {
//                 if(result){
//                     let data = user.data();
//                     return res.json({
//                         name: data.name, 
//                         email: data.email,
//                         seller: data.seller,
//                     })
//                 } else {
//                     return res.json({'alert':'incorrect password'})
//                 }
//             })
//         }
//     })
// })

// // 404
// app.get('/404', (req, res) => {
//     res.sendFile(path.join(staticPath, "404.html"));
// })

// app.use((req, res) => {
//     res.redirect('/404');
// })

// app.listen(3000, () => {
//     console.log('Example app code on port')
// })