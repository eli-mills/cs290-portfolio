import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';


function DeleteIcon ({id}) {
    const deleteRow = () => {console.log(`Deleting ${id}`)};

    return (
        <TiDeleteOutline onClick={deleteRow} />
    );
}

export default DeleteIcon;