import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineNoteAdd } from 'react-icons/md';

function CreateExerciseRow () {
    return (
        <tr>
            <td colSpan="5" className="create-row">
            <Link to="/create-exercise">
                 <MdOutlineNoteAdd className="icon add"/> 
            </Link>
            </td>
        </tr>
    );
}

export default CreateExerciseRow;