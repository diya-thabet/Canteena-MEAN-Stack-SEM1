const express = require('express'); 
const router = express.Router(); 

const Controller = require('../Controllers/dayController');

// Route to list all days
router.get('/lister', Controller.listerDay);

// Route to add a new day
router.post('/ajouter', Controller.ajouterDay);

// Route to delete a day by its ID
router.delete('/:id/supprimer', Controller.supprimerDay); // Changed GET to DELETE for semantic correctness

// Route to modify an existing day by its ID
router.put('/:id/modifier', Controller.modifierDay); // Changed POST to PUT for modification

module.exports = router;
