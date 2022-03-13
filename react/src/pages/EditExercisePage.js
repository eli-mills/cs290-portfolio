import React from 'react';
import ExerciseTableHead from '../components/ExerciseTableHead';
import { useState } from 'react'

function EditExercisePage ({entry}) {
    const [name, setName] = useState(entry.name);
    const [reps, setReps] = useState(entry.reps);
    const [weight, setWeight] = useState(entry.weight);
    const [units, setUnits] = useState(entry.units);
    const [date, setDate] = useState(entry.date);
    
    return (
        <>
            <h1>Edit Exercise: {entry._id}</h1>
            <form>
                <table>
                    <ExerciseTableHead />
                    <tbody>
                        <tr>
                            <td>
                                <input 
                                    type="text" 
                                    value={name} 
                                    onChange={e=>{setName(e.target.value)}}
                                />
                            </td>
                            <td>
                                <input 
                                    type="text"
                                    value={reps}
                                    inputMode="numeric"
                                    onChange={e=>{setReps(e.target.value)}}
                                />
                            </td>
                            <td>
                                <input 
                                    type="text"
                                    value={weight}
                                    inputMode="numeric"
                                    onChange={e=>{setWeight(e.target.value)}}
                                />
                            </td>
                            <td>
                                <select onChange={e=>{setUnits(e.target.value)}}>
                                    <option value="lbs" selected={units==="lbs"}>lbs</option>
                                    <option value="kgs" selected={units==="kgs"}>kgs</option>
                                </select>
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    value={date}
                                    onChange={e=>{setDate(e.target.value)}}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button 
                    onClick={ e => {
                        e.preventDefault();
                        alert(`Success! The following was updated: ${name}, ${reps}, ${weight}, ${units}, ${date}`);
                    }}
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default EditExercisePage;