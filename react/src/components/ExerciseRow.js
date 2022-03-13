import React from 'react';

import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';

function ExerciseRow ( {entry, setEntry} ) {
    const {_id, name, reps, weight, unit, date} = entry;
    return (
        <tr>
            <td>{name}</td>
            <td>{reps}</td>
            <td>{weight}</td>
            <td>{unit}</td>
            <td>{date}</td>
            <td className='tbl-icon'> <EditIcon setEntry={setEntry} entry={entry}/> </td>
            <td className='tbl-icon'> <DeleteIcon id={_id}/> </td>
        </tr>
    );
}

export default ExerciseRow;