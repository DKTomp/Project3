import './App.css';
import Todo from './Pages/Todo';
import Contact from './Pages/Contact';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Todo />} /> 
        <Route path="/contact" element={<Contact />} />    
      </Routes>
    </HashRouter> 
  );
}

export default App;
