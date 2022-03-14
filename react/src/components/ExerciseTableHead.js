import React from 'react';

function ExerciseTableHead () {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Reps</th>
                <th>Weight</th>
                <th>Unit</th>
                <th>Date</th>
                <th className="tbl-icon"></th>
                <th className="tbl-icon"></th>
            </tr>
        </thead>
    );
}

export default ExerciseTableHead;