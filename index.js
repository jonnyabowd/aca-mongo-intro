const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const UserRoutes = require('./express/routes/users')

mongoose.connect('mongodb://localhost/admin')

const port = process.env.PORT || 4001
const app = express()
app.use(bodyParser.json())
app.use('/users', UserRoutes)

app.get('/', (req, res) => res.send('Default route!'))

app.listen(port, () => {
  console.log(`Express app running on localhost:${port}`)
})