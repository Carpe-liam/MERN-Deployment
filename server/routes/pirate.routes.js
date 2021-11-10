const PirateController = require("../controllers/pirate.controller")

module.exports = function(app) {
    // CREATE
    app.post('/pirates/new', PirateController.createPirate)
    // READ
    app.get('/pirates', PirateController.getAllPirates)
    app.get('/pirates/:id', PirateController.getPirate)
    // UPDATE
    app.put('/pirates/:id', PirateController.updatePirate)
    // DELETE
    app.delete('/pirates/:id', PirateController.deletePirate)
} 