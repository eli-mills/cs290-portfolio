import React from 'react';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';

function EditIcon ({entry, setEntry}) {
    const editItem = () => { setEntry(entry) }
    return (
        <Link to="/edit-exercise">
            <BiEdit onClick={editItem} />
        </Link>
    );
}

export default EditIcon;