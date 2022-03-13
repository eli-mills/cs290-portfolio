import React from 'react';
import { useEffect, useState } from 'react';
import ExerciseRow from './ExerciseRow';
import CreateExerciseRow from './CreateExerciseRow';
import ExerciseTableHead from './ExerciseTableHead';

function ExerciseTable ({setEntry}) {
    const [entries, setEntriesToDisplay] = useState([]);

    const retrieveEntries = async () => {
        const response = await fetch('/exercises');
        const receivedEntries = await response.json();
        setEntriesToDisplay(receivedEntries);
    }

    useEffect( () => {retrieveEntries()}, [] );

    return (
        <table>
            <ExerciseTableHead />
            <tbody>
                {entries.map( (entry, index) => <ExerciseRow entry={entry} key = {index} setEntry={setEntry} setEntriesToDisplay={setEntriesToDisplay}/> ) }
                <CreateExerciseRow />
            </tbody>
        </table>
    );
}

export default ExerciseTable;