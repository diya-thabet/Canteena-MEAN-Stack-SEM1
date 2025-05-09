const TodosModel = require('../Models/supplier');

// Fonction Lister (List Supplier)
exports.listerSupplier = (req, res) => {
    TodosModel.find({}).exec((error, listTodos) => {
        if (error) return res.status(400).json({ error }); // Error in fetching data
        if (listTodos) return res.status(200).json({ listTodos }); // Success
    });
};

// Fonction Ajouter (Add Supplier)
exports.ajouterSupplier = (req, res) => {
    const Obj = {
        libelle: req.body.libelle,
        description: req.body.description,
        dateSupplier: req.body.dateSupplier,
        views: req.body.views,
        type: req.body.type,
    };

    const Todos = new TodosModel(Obj);

    Todos.save((error, created) => {
        if (error) return res.status(400).json({ error }); // Error in saving data
        if (created) return res.status(201).json({ created }); // Success
    });
};

// Fonction Supprimer (Delete Supplier)
exports.supprimerSupplier = (req, res) => {
    const id = req.params.id;

    TodosModel.findByIdAndRemove(id).exec((error, supplier) => {
        if (error) return res.status(400).json({ error }); // Error in deletion
        if (supplier) return res.status(200).json({ "message": "Supplier deleted successfully!" }); // Success
        return res.status(404).json({ "message": "Supplier not found" }); // Supplier not found
    });
};

// Fonction Modifier (Update Supplier)
exports.modifierSupplier = (req, res) => {
    const id = req.params.id;
    const modifiedObj = {
        libelle: req.body.libelle,
        description: req.body.description,
        dateSupplier: req.body.dateSupplier,
        views: req.body.views,
        type: req.body.type,
    };

    TodosModel.findByIdAndUpdate(id, modifiedObj, { new: true }).exec((error, updated) => {
        if (error) return res.status(400).json({ "message": "Error updating supplier!" });
        if (updated) return res.status(200).json({ "message": "Supplier updated successfully!" });
        return res.status(404).json({ "message": "Supplier not found" }); // Supplier not found
    });
};


// Fonction pour lister les suppliers par type
exports.listerSupplierByType = (req, res) => {
    const type = req.params.type;  // Capture the type parameter from the URL
    
    TodosModel.find({ type: type }).exec((error, suppliers) => {
        if (error) return res.status(400).json({ error });
        if (suppliers.length > 0) return res.status(200).json({ suppliers });
        else return res.status(404).json({ message: 'No suppliers found for this type' });
    });
};