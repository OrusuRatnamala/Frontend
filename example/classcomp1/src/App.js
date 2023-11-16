import logo from './logo.svg';
import './App.css';
import Infinite from './Infinite';
import ExampleState from './ExampleState';
function App() {
  return (
    <div class="bgcolor">
      <h2 align='right'>{new Date().toLocaleString()}</h2>
      <center>
      <header>
      <img src="/images/infi.jpg"  />
      <Infinite/>
       <ExampleState/>
      </header>
      </center>
    </div>
  );
}
export default App;
