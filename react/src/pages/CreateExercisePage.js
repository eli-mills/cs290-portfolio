import React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import ExerciseTableHead from '../components/ExerciseTableHead';

function CreateExercisePage () {
    const [name, setName] = useState();
    const [reps, setReps] = useState();
    const [weight, setWeight] = useState();
    const [unit, setUnit] = useState("lbs");
    const [date, setDate] = useState();

    const history = useHistory();

    const addEntry = async e => {
        e.preventDefault();
        const newEntry = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newEntry),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.status);
        if (response.status === 201) {
            alert('New entry added!');
        } else {
            alert(`Failed to create entry, status code ${response.status}`);
        }
        
        history.push('/');
    }
    
    return (
        <>
            <h1>Create Exercise</h1>
            <form>
                <table>
                    <ExerciseTableHead />
                    <tbody>
                        <tr>
                            <td>
                                <input 
                                    type="text" 
                                    onChange={e=>{setName(e.target.value)}}
                                />
                            </td>
                            <td>
                                <input 
                                    type="text"
                                    inputMode="numeric"
                                    onChange={e=>{setReps(e.target.value)}}
                                />
                            </td>
                            <td>
                                <input 
                                    type="text"
                                    inputMode="numeric"
                                    onChange={e=>{setWeight(e.target.value)}}
                                />
                            </td>
                            <td>
                                <select value="lbs" onChange={e=>{setUnit(e.target.value)}}>
                                    <option value="lbs">lbs</option>
                                    <option value="kgs">kgs</option>
                                </select>
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    onChange={e=>{setDate(e.target.value)}}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={ addEntry }>
                    Submit
                </button>
            </form>
        </>
    );
}

export default CreateExercisePage;