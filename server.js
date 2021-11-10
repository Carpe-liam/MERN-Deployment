// ==== IMPORT AND INSTANTIATE EXPRESS SERVER
const express = require('express')
const cors = require('cors')
const port = 8000
const app = express()

// ==== CONNNECT MONGOOSE TO MONGO-DB
require('./server/config/mongoose.config')

// ==== CONFIGURE FOR EXPRESS SERVER
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// ==== CONNECT EXPRESS TO ROUTES
require("./server/routes/pirate.routes")(app)

// ==== RUN EXPRESS SERVER
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})