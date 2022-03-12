import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';


function DeleteIcon ({id}) {
    const whenClicked = () => {console.log(`Deleting ${id}`)};

    return (
        <TiDeleteOutline onClick={whenClicked} />
    );
}

export default DeleteIcon;