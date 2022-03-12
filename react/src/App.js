import './App.css';

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// PAGES
import HomePage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage';
import CreateExercisePage from './pages/CreateExercisePage';

// COMPONENTS
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Common Header</h1>
        </header>

        <Navigation />

        <main>
          <Route path="/" exact> <HomePage /> </Route>
          <Route path="/create-exercise"> <CreateExercisePage /> </Route>
          <Route path="/edit-exercise"> <EditExercisePage /> </Route>
        </main>

        <footer>
          <p>&copy; 2022 Eli Mills</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
