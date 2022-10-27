import './App.css';
import { Reset } from 'styled-reset';
import Profile from './route//Profile';
import Experience from './route//Experience';
import Skills from './route//Skills';
import Favorability from './route//Favorability';
import Project from './route//Project';
import Contact from './route/Contact';


function App() {
  return (
    <div className="App" >
      <Reset />
      <div id="wrap">
        <Profile />
        <Experience />
        <Skills />
        <Favorability />
        <Project />
        <Contact />

      </div>
    </div>

  );
}

export default App;
