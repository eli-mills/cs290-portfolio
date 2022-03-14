import React from 'react';

import ExerciseTable from '../components/ExerciseTable';

function HomePage ({setEntry}) {
    return (
        <>
            <h2>Exercise Log</h2>
            <ExerciseTable setEntry={setEntry}/>
        </>
    );
}

export default HomePage;