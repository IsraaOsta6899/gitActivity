import logo from './logo.svg';
import './App.css';
import Sum from './components/sum';
import Mult from './components/mult';
function App() {
  return (
    <div className="App">
      <Mult num1={10} num2={2} />
      <hr></hr>
      <Sum />
    </div>
  );
}

export default App;
