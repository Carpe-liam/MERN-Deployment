const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/pirates', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log("Database connection established. DB: pirates "))
    .catch(error => console.log("There was an error", error))