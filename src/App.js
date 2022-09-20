import logo from './components/assets/images/logo.svg';
import './components/assets/css/App.css'

const printInfo = (name,lastname,age) =>{
const info = (
  <div>
    <h2>Hi!, My name is {name} {lastname}</h2>
    <h3>I'm {age} years old, I'm young right?</h3>
  </div>
);
return info;

}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to JEJE.
        </p>
        {printInfo('Santiago','Maldonado',21)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
