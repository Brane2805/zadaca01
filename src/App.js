import logo from './logo.svg';
import './App.css';
import DefExp from "./defexp.js";
import {Name, Surname, City} from "./nameexp.js";
let imePrezime = DefExp();
let ime = imePrezime.firstName;
let prezime = imePrezime.lastName;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {Name()}, {Surname()}, {City()} povučeno iz name export modula.
        </p>
        <p>
          {ime} {prezime} povučeno iz default export modula.
        </p>
      
      </header>
    </div>
  );
}

export default App;
