import React from 'react';
import ExerciseTableHead from '../components/ExerciseTableHead';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function EditExercisePage ({entry}) {
    const [name, setName] = useState(entry.name);
    const [reps, setReps] = useState(entry.reps);
    const [weight, setWeight] = useState(entry.weight);
    const [unit, setUnit] = useState(entry.unit);
    const [date, setDate] = useState(entry.date);

    const history = useHistory();

    const editEntry = async e => {
        e.preventDefault();
        const response = await fetch(`/exercises/${entry._id}`, {
            method: 'PUT',
            body: JSON.stringify({name, reps, weight, unit, date}),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.status === 200) {
            alert("Successfully edited the entry.");
        } else {
            alert(`Failed to edit the entry, status code: ${response.status}`);
        }

        history.push('/');
    };
    
    return (
        <>
            <h1>Edit Exercise:</h1>
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
                                <select onChange={e=>{setUnit(e.target.value)}}>
                                    <option value="lbs" selected={unit==="lbs"}>lbs</option>
                                    <option value="kgs" selected={unit==="kgs"}>kgs</option>
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
                <button onClick={ editEntry }>
                    Save Changes
                </button>
            </form>
        </>
    );
}

export default EditExercisePage;