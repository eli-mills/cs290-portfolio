// STYLES
import './App.css';

// UTILITIES
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useState } from 'react';

// PAGES
import HomePage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage';
import CreateExercisePage from './pages/CreateExercisePage';

// COMPONENTS
import Navigation from './components/Navigation';

function App() {

  let [entryToEdit, setEntryToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <header>
          <h1>Log Your Lifts</h1>
        </header>

        <Navigation />

        <main>
          <Route path="/" exact> <HomePage setEntry={setEntryToEdit}/> </Route>
          <Route path="/edit-exercise"> <EditExercisePage entry={entryToEdit}/> </Route>
          <Route path="/create-exercise"> <CreateExercisePage /> </Route>
        </main>

        <footer>
          &copy; 2022 Eli Mills
        </footer>
      </Router>
    </div>
  );
}

export default App;
