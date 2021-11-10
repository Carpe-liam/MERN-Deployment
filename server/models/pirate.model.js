const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirate name required"],
        minlength: [3, "Name must be 3 characters long"] 
    },
    image: {
        type: String,
        required: [true, "Must have image"]
    },
    treasures: {
        type: Number,
        required: [true, "Treasure number required"]
    },
    phrase: {
        type: String,
        required: [true, "Must have catch phrase"]
    },
    position: {
        type: String,
        min: [1, "Must have at least one treasure to be pirate"],
        required: [true, "Must have crew position"]
    },
    pegLeg: {
        type: String,
        
    },
    eyePatch: {
        type: String,
        
    },
    hookHand: {
        type: String,
        
    }
}, {timestamps: true})

module.exports.Pirate = mongoose.model("Pirate", PirateSchema)