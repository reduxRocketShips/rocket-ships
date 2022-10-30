import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import './App.css';

/*
what will the user see?

  A Header that includes a Nav Bar, with shipCounts on each end, as well as START TURN / HELP

  A landing page / Win Screen, which includes space art, instructions, and a start button.

  A Map component, which includes a responsive screen that fills the device width.
      Ship Components, which are clickable, show their movement range and currentTarget, and can be given orders to move and shoot.

  A Footer, directing people to the creators of the project, and the github.
*/

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
