import mongoose from 'mongoose';


// INITIALIZE DATABASE CONNECTION
mongoose.connect(
    "mongodb://localhost:27017/exercise_db",
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Connected to MongoDB.");
});


// DEFINE SCHEMA AND MODEL
const entrySchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        reps: { type: Number, required: true },
        weight: { type: Number, required: true },
        unit: { type: String, required: true },
        date: { type: String, required: true },
    }
);

const Entry = mongoose.model("Entry", entrySchema);


// DEFINE CRUD OPERATIONS

// CREATE
const createEntry = async (name, reps, weight, unit, date) => {
    const entry = new Entry( {name: name, reps: reps, weight: weight, unit: unit, date: date} );
    return entry.save();
}

// RETRIEVE
const retrieveAllEntries = async () => {
    return Entry.find().exec();
}

// UPDATE
const updateEntry = async (entryId, updates) => {
    return User.findOneAndUpdate( {_id: entryId}, updates );
}

// DELETE
const deleteEntry = async (entryId) => {
     return User.deleteOne( {_id: entryId} );
}