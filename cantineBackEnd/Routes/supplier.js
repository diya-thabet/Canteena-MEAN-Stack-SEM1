const express = require('express'); 
const router = express.Router(); 

const Controller = require('../Controllers/supplierController');

// Route to list all suppliers
router.get('/lister', Controller.listerSupplier); 

// Route to add a new supplier
router.post('/ajouter', Controller.ajouterSupplier); 

// Route to delete a supplier by ID
router.delete('/:id/supprimer', Controller.supprimerSupplier); // Changed GET to DELETE for correct semantic usage

// Route to modify an existing supplier by ID
router.put('/:id/modifier', Controller.modifierSupplier); // Changed POST to PUT for modification

router.get('/bytype/:type', Controller.listerSupplierByType); 
module.exports = router;
