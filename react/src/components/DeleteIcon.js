import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';


function DeleteIcon ({id, setEntriesToDisplay}) {
    const deleteRow = async () => {
        const response = await fetch(`/exercises/${id}`, {method: 'DELETE'});
        if (response.status === 204) {
            const retrieveEntriesResponse = await fetch('/exercises');
            const newEntryList = await retrieveEntriesResponse.json();
            setEntriesToDisplay(newEntryList);
        } else {
            console.error(`Failed to delete entry, status code ${response.status}.`);
        }
    };

    return (
        <TiDeleteOutline onClick={deleteRow} />
    );
}

export default DeleteIcon;