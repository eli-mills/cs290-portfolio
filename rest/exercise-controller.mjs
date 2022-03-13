import express from 'express';
import { createEntry, retrieveAllEntries, updateEntry, deleteEntry } from './exercise-model.mjs';

const PORT = 3000;

const app = express();

app.use(express.json());


// ROUTES

// CREATE
app.post('/exercises', ( req, res ) => {
    const { name, reps, weight, unit, date } = req.body;
    createEntry( name, reps, weight, unit, date )
    .then( newEntry => { res.status(201).json(newEntry); } )
    .catch( error => { 
        console.error(error);
        res.status(400).json({Error: 'Create request failed.'}); 
    });
});

// RETRIEVE
app.get('/exercises', (req, res)=>{
    retrieveAllEntries()
    .then( entryArray => { res.status(200).json(entryArray) } )
    .catch( error => { 
        console.error(error);
        res.status(400).json({Error: 'Retrieve request failed.'}); 
    });
});

// UPDATE
app.put('/exercises:_id', ()=>{
    console.log("PUT request received.")
});

// DELETE
app.delete('/exercises:_id', ()=>{
    console.log("DELETE request received.")
});


// START SERVER
app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});




