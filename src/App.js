import ItemListContainer from './components/ItemListContainer';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <header className="App-header">
        <Navbar />
        <Routes>
          <Route path='/' element={ <ItemListContainer /> }/>
          <Route path='/' element={ <ItemListContainer /> }/>
          <Route path='/' element={ <ItemListContainer /> }/>
          <Route path='/' element={ <ItemListContainer /> }/>
        </Routes>
        </header>
        <ItemListContainer  />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
