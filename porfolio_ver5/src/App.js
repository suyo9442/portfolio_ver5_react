import './App.css';
import { Reset } from 'styled-reset';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Reset />
      <div id="wrap">
        <Profile />

      </div>
    </div>
  );
}

export default App;
