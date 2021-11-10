const { request } = require("express")
const { Pirate } = require("../models/pirate.model")

// ==== CREATE ====
module.exports.createPirate = (req, res) => {
    const { name, image, treasures, phrase, position, pegLeg, eyePatch, hookHand } = req.body
    Pirate.create({
        name,
        image,
        treasures,
        phrase,
        position,
        pegLeg,
        eyePatch,
        hookHand
    })
        .then(pirate => res.json(pirate))
        .catch(err => {
            console.log("Validation Failed")
            res.status(400).json(err)
        })
}

// ===== READ =====
module.exports.getAllPirates = (req, res) => {
    // SORTS BY FIRST NAME; CHANGE KEYNAME TO CHANGE SORTING, -1 IS TO REVERSE SORT
    Pirate.find().collation({locale:'en',strength: 2}).sort({name:1})

        .then(pirates => res.json(pirates))
        .catch(err=> res.json(err))
}
module.exports.getPirate = (req, res) => {
    Pirate.findOne({ _id: req.params.id })
        .then(pirate => res.json(pirate))
        .catch(err => res.json(err))
}

// ==== UPDATE ====
module.exports.updatePirate = (req, res) => {
    Pirate.findByIdAndUpdate({ _id: req.params.id }, req.body, {runValidators: true, new: true})
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.status(400).json(err))
}

// ==== DELETE ====
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
        .then(deleteConf => res.json(deleteConf))
        .catch(err => {
            console.log("Validation Failed")
            res.status(400).json(err)
        })
}