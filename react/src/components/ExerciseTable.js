import React from 'react';
import ExerciseRow from './ExerciseRow';
import CreateExerciseRow from './CreateExerciseRow';
import ExerciseTableHead from './ExerciseTableHead';

function ExerciseTable ({setEntry}) {
    const entries = [
        {
            _id: "id01",
            name: "Deadlifts",
            reps: "20", 
            weight: "200", 
            unit: "lbs",
            date: "03-12-2022"
        }
    ];          // List of JSON objects containing all exercise entries

    return (
        <table>
            <ExerciseTableHead />
            <tbody>
                {entries.map( (entry, index) => <ExerciseRow entry={entry} key = {index} setEntry={setEntry}/> ) }
                <CreateExerciseRow />
            </tbody>
        </table>
    );
}

export default ExerciseTable;