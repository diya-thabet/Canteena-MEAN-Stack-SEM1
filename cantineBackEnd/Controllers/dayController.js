const TodosModel = require('../Models/day');

// Fonction Lister (List Day)
exports.listerDay = (req, res) => {
    TodosModel.find({}).exec((error, listTodos) => {
        if (error) return res.status(400).json({ error }); // Error in fetching data
        if (listTodos) return res.status(200).json({ listTodos }); // Success
    });
};

// Fonction Ajouter (Add Day)
exports.ajouterDay = (req, res) => {
    const Obj = {
        idDay: req.body.idDay,
        nomDay: req.body.nomDay,
        ref: req.body.ref,
    };

    const Todos = new TodosModel(Obj);

    Todos.save((error, created) => {
        if (error) return res.status(400).json({ error }); // Error in saving data
        if (created) return res.status(201).json({ created }); // Success
    });
};

// Fonction Supprimer (Delete Day)
exports.supprimerDay = (req, res) => {
    const id = req.params.id;

    TodosModel.findByIdAndRemove(id).exec((error, day) => {
        if (error) return res.status(400).json({ error }); // Error in deletion
        if (day) return res.status(200).json({ "message": "Day deleted successfully!" }); // Success
        return res.status(404).json({ "message": "Day not found" }); // Day not found
    });
};

// Fonction Modifier (Update Day)
exports.modifierDay = (req, res) => {
    const id = req.params.id;
    const modifiedObj = {
        idDay: req.body.idDay,
        nomDay: req.body.nomDay,
        ref: req.body.ref,
    };

    TodosModel.findByIdAndUpdate(id, modifiedObj, { new: true }).exec((error, updated) => {
        if (error) return res.status(400).json({ "message": "Error updating day!" });
        if (updated) return res.status(200).json({ "message": "Day updated successfully!" });
        return res.status(404).json({ "message": "Day not found" }); // Day not found
    });
};
