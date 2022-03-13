import express from 'express';
import { createEntry, retrieveAllEntries, updateEntry, deleteEntry } from './exercise-model.mjs';

const PORT = 3000;

const app = express();

app.use(express.json());


// ROUTES

// CREATE
app.post('/exercises', ( req, res ) => {
    const { name, reps, weight, unit, date } = req.body;
    console.log("Create request received.");
    createEntry( name, reps, weight, unit, date )
    .then( newEntry => { res.status(201).json(newEntry); } )
    .catch( error => { 
        console.error(error);
        res.status(400).json({Error: 'Create request failed.'}); 
    });
});

// RETRIEVE
app.get('/exercises', (req, res)=>{
    console.log("Retrieve request received.");
    retrieveAllEntries()
    .then( entryArray => { res.status(200).json(entryArray) } )
    .catch( error => { 
        console.error(error);
        res.status(400).json({Error: 'Retrieve request failed.'}); 
    });
});

// UPDATE
app.put('/exercises/:_id', (req, res)=>{
    const updates = req.body;
    console.log(updates);
    updateEntry(req.params._id, updates)
    .then(entry => { res.status(200).json(entry); })
    .catch(error => { 
        console.error(error);
        res.status(400).json({Error: 'Update request failed.'});
    });
});

// DELETE
app.delete('/exercises/:_id', (req, res)=>{
    console.log("Delete request received.");
    deleteEntry(req.params._id)
    .then(()=>{res.status(204).end()})
    .catch(error => {
        console.error(error);
        res.status(400).json({Error: 'Delete request failed.'});
    });
});


// START SERVER
app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});




