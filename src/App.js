import logo from './logo.svg';
import './App.css';
import Indice from './paginas/Index';
import Sobremi from './paginas/Sobremi';
import Contacto from './paginas/Contacto';
import Servicios from './paginas/Servicios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Index from './paginas/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/Sobremi' element={<Sobremi />}/>
          <Route path='/Servicios' element={<Servicios />}/> 
          <Route path='/Contacto' element={<Contacto />}/> 
        </Routes>
      </Router>

    </div>
  );
}

export default App;
