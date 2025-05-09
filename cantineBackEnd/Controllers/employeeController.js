const TodosModel = require('../Models/employee');

// Fonction Lister (List Employees)
exports.listerEmployee = (req, res) => {
    TodosModel.find({}).exec((error, listTodos) => {
        if (error) return res.status(400).json({ error }); // Error in fetching data
        if (listTodos) return res.status(200).json({ listTodos }); // Success
    });
};

// Fonction Ajouter (Add Employee)
exports.ajouterEmployee = (req, res) => {
    const Obj = {
        email: req.body.email,
        dateIng: req.body.dateIng,
        statue: req.body.statue,
    };

    const Todos = new TodosModel(Obj);

    Todos.save((error, created) => {
        if (error) return res.status(400).json({ error }); // Error in saving data
        if (created) return res.status(201).json({ created }); // Success
    });
};

// Fonction Supprimer (Delete Employee)
exports.supprimerEmployee = (req, res) => {
    const id = req.params.id;

    TodosModel.findByIdAndRemove(id).exec((error, employee) => {
        if (error) return res.status(400).json({ error }); // Error in deletion
        if (employee) return res.status(200).json({ "message": "Employee deleted successfully!" }); // Success
        return res.status(404).json({ "message": "Employee not found" }); // Employee not found
    });
};

// Fonction Modifier (Update Employee)
exports.modifierEmployee = (req, res) => {
    const id = req.params.id;
    const modifiedObj = {
        email: req.body.email,
        dateIng: req.body.dateIng,
        statue: req.body.statue,
    };

    TodosModel.findByIdAndUpdate(id, modifiedObj, { new: true }).exec((error, updated) => {
        if (error) return res.status(400).json({ "message": "Error updating employee!" });
        if (updated) return res.status(200).json({ "message": "Employee updated successfully!" });
        return res.status(404).json({ "message": "Employee not found" });
    });
};
