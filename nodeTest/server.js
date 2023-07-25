const express = require('express')
const app = express()
const port = 1315229519

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(port, () => {
    console.log('Example app code on port')
})