const express = require('express'); 
const router = express.Router(); 

const Controller = require('../Controllers/employeeController');

// Route to list all employees
router.get('/lister', Controller.listerEmployee);

// Route to add a new employee
router.post('/ajouter', Controller.ajouterEmployee);

// Route to delete an employee by ID
router.delete('/:id/supprimer', Controller.supprimerEmployee); // Changed GET to DELETE for semantic correctness

// Route to modify an existing employee by ID
router.put('/:id/modifier', Controller.modifierEmployee); // Changed POST to PUT for modification

module.exports = router;
