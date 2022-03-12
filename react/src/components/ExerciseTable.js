import React from 'react';
import ExerciseRow from './ExerciseRow';

function ExerciseTable () {
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
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {entries.map( (entry, index) => <ExerciseRow entry={entry} key = {index} /> ) }
            </tbody>
        </table>
    );
}

export default ExerciseTable;