import React from 'react';
import { BiEdit } from 'react-icons/bi';

function EditIcon ({id}) {
    const whenClicked = () => {console.log(`Editing ${id}`)}
    return (
        <BiEdit onClick={whenClicked} />
    );
}

export default EditIcon;