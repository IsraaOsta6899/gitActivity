import logo from './logo.svg';
import './App.css';
import Sum from './components/sum';
import Mult from './components/mult';
function App() {
  return (
    <div className="App">
      <Mult />
      <hr></hr>
      <Sum />
    </div>
  );
}

export default App;
