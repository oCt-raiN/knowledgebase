import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button href="http://celiacindia.in/"> c </Button>
        <a
          className='as'
          href='celiacindia.in'
          target='_blank'
          rel='noopener noreferrer'
          >
            celiac database
            </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        My project
        </a>
      </header>
    </div>
  );
}

export default App;
