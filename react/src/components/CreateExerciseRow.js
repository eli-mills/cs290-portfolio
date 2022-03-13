import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineNoteAdd } from 'react-icons/md';

function CreateExerciseRow () {
    return (
        <tr>
            <td colSpan="5">
                <Link to="/create-exercise"> <MdOutlineNoteAdd /> </Link>
            </td>
        </tr>
    );
}

export default CreateExerciseRow;