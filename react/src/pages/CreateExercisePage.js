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
                                <select onChange={e=>{setUnit(e.target.value)}}>
                                    <option value="lbs" selected>lbs</option>
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
                <button 
                    onClick={ e => {
                        e.preventDefault();
                        alert(`Success! The following was created: ${name}, ${reps}, ${weight}, ${unit}, ${date}`);
                        history.push('/');
                    }}
                >
                    Submit
                </button>
            </form>
        </>
    );
}

export default CreateExercisePage;