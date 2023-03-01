
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/Navbar';
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Navbar />
      </header>
      <ItemListContainer referencia="MT 03" cilindrada="321 cm3" Potencia="42 HP" torque="29,6 Nm" peso="168 Kg" />
    </div>
  );
}

export default App;
