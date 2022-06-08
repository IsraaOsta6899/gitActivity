import logo from './logo.svg';
import './App.css';
import Sum from './components/sum';
import Mult from './components/mult';
function App() {
  return (
    <div className="App">
      <Mult />
      <hr></hr>
      <Sum var1={5} var2={3}/>
    </div>
  );
}

export default App;
