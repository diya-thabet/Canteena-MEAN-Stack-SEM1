const express = require('express'); 
const router = express.Router(); 

const Controller = require('../Controllers/platController');

// Route to list all plats
router.get('/lister', Controller.listerPlat);

// Route to add a new plat
router.post('/ajouter', Controller.ajouterPlat);

// Route to delete a plat by ID
router.delete('/:id/supprimer', Controller.supprimerPlat); // Changed GET to DELETE for semantic correctness

// Route to modify an existing plat by ID
router.put('/:id/modifier', Controller.modifierPlat); // Changed POST to PUT for modification

module.exports = router;


router.get('/byday/:day', Controller.listerPlatsByDay); 