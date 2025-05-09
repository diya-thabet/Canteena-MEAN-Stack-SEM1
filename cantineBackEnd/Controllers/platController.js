const TodosModel = require('../Models/plat');

// Fonction Lister (List Plat)
exports.listerPlat = (req, res) => {
    TodosModel.find({}).exec((error, listTodos) => {
        if (error) return res.status(400).json({ error }); // Error in fetching data
        if (listTodos) return res.status(200).json({ listTodos }); // Success
    });
};

// Fonction Ajouter (Add Plat)
exports.ajouterPlat = (req, res) => {
    const Obj = {
        idDay: req.body.idDay,
        libePlat: req.body.libePlat,
    };

    const Todos = new TodosModel(Obj);

    Todos.save((error, created) => {
        if (error) return res.status(400).json({ error }); // Error in saving data
        if (created) return res.status(201).json({ created }); // Success
    });
};

// Fonction Supprimer (Delete Plat)
exports.supprimerPlat = (req, res) => {
    const id = req.params.id;

    TodosModel.findByIdAndRemove(id).exec((error, plat) => {
        if (error) return res.status(400).json({ error }); // Error in deletion
        if (plat) return res.status(200).json({ "message": "Plat deleted successfully!" }); // Success
        return res.status(404).json({ "message": "Plat not found" }); // Plat not found
    });
};

// Fonction Modifier (Update Plat)
exports.modifierPlat = (req, res) => {
    const id = req.params.id;
    const modifiedObj = {
        idDay: req.body.idDay,
        libePlat: req.body.libePlat,
    };

    TodosModel.findByIdAndUpdate(id, modifiedObj, { new: true }).exec((error, updated) => {
        if (error) return res.status(400).json({ "message": "Error updating plat!" });
        if (updated) return res.status(200).json({ "message": "Plat updated successfully!" });
        return res.status(404).json({ "message": "Plat not found" }); // Plat not found
    });
};


// Function to get plats for a specific day
exports.listerPlatsByDay = (req, res) => {
    const dayName = req.params.day;  // Get the day from the URL parameter

    TodosModel.aggregate([
        {
            $lookup: {
                from: 'days',  // 'days' is the collection for the Day model
                localField: 'idDay',  // Plat's idDay field
                foreignField: 'idDay', // Day's idDay field
                as: 'dayDetails'  // Alias for the joined collection
            }
        },
        {
            $unwind: "$dayDetails"  // Unwind the 'dayDetails' array to access individual elements
        },
        {
            $match: { "dayDetails.nomDay": dayName }  // Match where the day's name equals the parameter
        },
        {
            $project: { 
                libePlat: 1,  // Only select the 'libePlat' field from Plat
                _id: 0  // Optionally exclude the '_id' field from the result
            }
        }
    ])
    .exec((error, plats) => {
        if (error) return res.status(400).json({ error });
        if (plats.length > 0) return res.status(200).json({ plats });
        else return res.status(404).json({ message: `No plats found for ${dayName}` });
    });
};